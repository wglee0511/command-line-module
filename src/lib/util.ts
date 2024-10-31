import { AnswerObjectType, QuestionType } from '@/types/inquirer';
import { find, forEach, includes, isNil } from 'lodash';
import { AGREE_TYPE, AnswerScore, MBTI_FIRST_VALUE } from './constant';

const getMbtiScoreObject = (questions: QuestionType[], answers: AnswerObjectType) => {
  const mbtiScoreObject = {
    EI: [0, 0],
    NS: [0, 0],
    FT: [0, 0],
    PJ: [0, 0],
  };

  forEach(questions, (question) => {
    const answer = answers[question.name];
    const score = AnswerScore[answer];

    if (parseInt(score) === 0) {
      return;
    }

    const isAgreeType = !!find(AGREE_TYPE, (value) => value === answer);

    let mbtiValue;
    if (isAgreeType) {
      mbtiValue = question?.agree;
    } else {
      mbtiValue = question?.disagree;
    }
    const scoreObjectKeys = Object.keys(mbtiScoreObject);
    const findKey = find(scoreObjectKeys, (value) => includes(value, mbtiValue));

    if (isNil(findKey)) {
      return;
    }

    const scoreIndex = includes(MBTI_FIRST_VALUE, mbtiValue) ? 0 : 1;
    mbtiScoreObject[findKey][scoreIndex] += score;
  });

  return mbtiScoreObject;
};

export const findMbti = (questions: QuestionType[], answers: AnswerObjectType) => {
  const mbtiScoreObject = getMbtiScoreObject(questions, answers);

  let mbti = '';
  const keys = Object.keys(mbtiScoreObject);

  forEach(keys, (value) => {
    const scores = mbtiScoreObject[value];
    const mbtiElement = scores[0] >= scores[1] ? value[0] : value[1];

    mbti += mbtiElement;
  });

  return mbti;
};
