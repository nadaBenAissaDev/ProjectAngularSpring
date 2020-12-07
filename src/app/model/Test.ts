import {Proposition} from './Proposition';

export interface Test {
  id: number;
  content: string;
  answer: string;
  propositions: Proposition[];
}
