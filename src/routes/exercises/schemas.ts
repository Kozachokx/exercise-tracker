import { exerciseId, userId } from '../../validation-models';

import joi from 'joi';

// const createUserSchema = joi.object({
//   dialogId: dialogId.required(),
//   mark: mark.required(),
//   surveyType: surveyType.required(),
// });

const queryUserExercisesSchema = joi.object({
  id: userId.required(),
});

const queryExerciseGetOneSchema = joi.object({
  userId: userId.required(),
  exerciseId: exerciseId.required(),
});

export {
  // createUserSchema,
  queryUserExercisesSchema,
  queryExerciseGetOneSchema,
};
