import * as getAll from './get-all';
import * as deleteById from './delete-by-id';
import * as getOneById from './get-one-by-id';
import * as getLogsById from './get-logs-by-id';
import * as save from './save';

export const UserService = {
  ...getAll,
  ...getOneById,
  ...getLogsById,
  ...save,
  ...deleteById,
};
