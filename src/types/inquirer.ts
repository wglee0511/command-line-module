import { Answers } from 'inquirer';
import { UnnamedDistinctQuestion } from 'inquirer/dist/commonjs/types';
import { MbtiType } from './mbti';

export type ListQuestionType = UnnamedDistinctQuestion<Answers & object> & {
  name: string;
};

export type AnswerObjectType = { [key in string]: any };

export type QuestionType = ListQuestionType & {
  key: number;
  agree: MbtiType;
  disagree: MbtiType;
};
