import { MbtiType } from '@/types/mbti';

export const MBTI_QUESTIONS = [
  {
    disagree: 'E',
    agree: 'I',
    text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`,
  },
  {
    disagree: 'S',
    agree: 'N',
    text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.`,
  },
  {
    disagree: 'T',
    agree: 'F',
    text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.`,
  },
  {
    disagree: 'J',
    agree: 'P',
    text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.`,
  },
  {
    disagree: 'E',
    agree: 'I',
    text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.`,
  },
  {
    disagree: 'S',
    agree: 'N',
    text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.`,
  },
  {
    disagree: 'T',
    agree: 'F',
    text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.`,
  },
  {
    disagree: 'J',
    agree: 'P',
    text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.`,
  },
];

export const SELECTED_MODULE = 'selectedModule';
export const MBTI_TEST = 'MBTI 선택하기';
export const ORDER_TEST = '순서 바꾸기';

export const STRONG_DISAGREE = '매우 아니다';
export const DISAGREE = '아니다';
export const SOMETIMES = '보통이다';
export const AGREE = '그렇다';
export const STRONG_AGREE = '매우 그렇다';

export const AGREE_TYPE = [AGREE, STRONG_AGREE];
export const DISAGREE_TYPE = [DISAGREE, STRONG_DISAGREE];

export const MBTI_FIRST_VALUE = ['E', 'N', 'F', 'P'];

export enum AnswerScore {
  '매우 아니다' = 2,
  '아니다' = 1,
  '보통이다' = 0,
  '그렇다' = 1,
  '매우 그렇다' = 2,
}
