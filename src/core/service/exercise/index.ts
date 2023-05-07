import * as deleteOneById from './delete-by-id';
import * as getAll from './get-all';
import * as getOneById from './get-one-by-id';
import * as save from './save';

export const ExerciseService = {
  ...deleteOneById,
  ...getAll,
  ...getOneById,
  ...save,
};
