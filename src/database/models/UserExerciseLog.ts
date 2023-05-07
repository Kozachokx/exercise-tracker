import { Exercise } from './Exercise';
import { User } from './User';

export interface UserExercisesLog extends User {
  logs: Exercise[];
  count: number;
}
