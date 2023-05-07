import * as getValue from './get-value';
import * as incrementValueTransaction from './increment-value-transaction';
import * as setValue from './set-value';

export const CounterService = {
  ...getValue,
  ...incrementValueTransaction,
  ...setValue,
};
