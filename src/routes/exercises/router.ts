import { Router } from 'express';
import { ExerciseController } from '../../core/controller';
import { handleErrorAsync } from '../../middlewares/error-middleware';
import { validateBody, validateParams } from '../../middlewares/validator-middleware';
import { queryExerciseGetOneSchema } from './schemas';
import { ExerciseCreateSchema } from './validation';

const router = Router();

// [C] Create user exercise
router.post(
  '/users/:userId/exercises',
  validateBody(ExerciseCreateSchema),
  handleErrorAsync(ExerciseController.ExerciseCreate),
);

// [R] Get all exercises
router.get('/users/:userId/exercises', handleErrorAsync(ExerciseController.ExerciseGetAll));

// [R] Get one exercise
router.get(
  '/users/:userId/exercises/:exerciseId',
  validateParams(queryExerciseGetOneSchema),
  handleErrorAsync(ExerciseController.ExerciseGetOne),
);

// [D] Delete exercise
router.delete(
  '/users/:userId/exercises/:exerciseId',
  validateParams(queryExerciseGetOneSchema),
  handleErrorAsync(ExerciseController.ExerciseDelete),
);

export { router };
