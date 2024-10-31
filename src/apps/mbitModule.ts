/**
 * MBTI를 계산해 콘솔에 출력하는 프로그램을 작성해주세요.
 *
 * 아래 questions 배열은 MBTI를 계산하기 위한 문항들입니다.
 * 모든 문항에 대한 선택지는 다섯개로 동일하며 다음과 같습니다.
 *   매우 아니다, 아니다, 보통이다, 그렇다, 매우 그렇다
 *
 * 선택지에 따라 다음과 같이 점수를 부여합니다.
 *   매우 아니다는 disagree 타입에 2점
 *   아니다는 disagree 타입에 1점
 *   보통이다는 양쪽에 0점
 *   그렇다는 agree 타입에 1점
 *   매우 그렇다는 agree 타입에 2점
 *
 * 예를 들어 첫 번째 문항인 `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`에
 * 매우 아니다라고 답하면 E 타입에 2점
 * 아니다라고 답하면 E 타입에 1점
 * 보통이다라고 답하면 양쪽에 0점
 * 그렇다라고 답하면 I 타입에 1점
 * 매우 그렇다라고 답하면 I 타입에 2점을 부여합니다.
 *
 * 자리가 같은 두 알파벳의 점수가 같은 경우 다음과 같이 처리합니다.
 *   E == I: E
 *   S == N: N
 *   F == T: F
 *   P == J: P
 * 따라서 모든 항목에 보통이다라고 답하면 결과는 ENFP가 됩니다.
 */

import { AGREE, DISAGREE, MBTI_QUESTIONS, SOMETIMES, STRONG_AGREE, STRONG_DISAGREE } from '@/lib/constant';
import { ListQuestionType, QuestionType } from '@/types/inquirer';
import inquirer from 'inquirer';
import { map } from 'lodash';
import { startMain } from './main';
import { findMbti } from '@/lib/util';

export const mbtiModule = async () => {
  const convertToPrompt: ListQuestionType[] = map(MBTI_QUESTIONS, (value, index) => {
    return {
      type: 'list',
      name: 'question_' + index,
      message: value.text,
      choices: [STRONG_DISAGREE, DISAGREE, SOMETIMES, AGREE, STRONG_AGREE],
      key: index,
      agree: value.agree,
      disagree: value.disagree,
    };
  });

  await inquirer
    .prompt(convertToPrompt)
    .then((answers) => {
      const mbti = findMbti(convertToPrompt as QuestionType[], answers);
      console.log(`\n
      ================================\n
      ✅ 당신의 MBTI는 ${mbti} 입니다.\n
      ================================\n
      `);

      startMain();
    })
    .catch((error) => {
      console.log(JSON.stringify(error, null, '  '));
    });
};
