import inquirer from 'inquirer';

import { mbtiModule } from './mbitModule';
import { orderModule } from './orderModule';
import { MBTI_TEST, ORDER_TEST, SELECTED_MODULE } from '@/lib/constant';

export const startMain = async () => {
  await inquirer
    .prompt([
      {
        type: 'list',
        name: SELECTED_MODULE,
        message: '테스트할 모듈을 선택해 주세요',
        choices: [MBTI_TEST, ORDER_TEST],
      },
    ])
    .then((answers) => {
      if (answers[SELECTED_MODULE] === MBTI_TEST) {
        mbtiModule();
      } else {
        orderModule();
      }
    })
    .catch((error) => {
      console.log(JSON.stringify(error, null, '  '));
    });
};
