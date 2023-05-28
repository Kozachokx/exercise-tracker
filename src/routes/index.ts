/**
 * Read router.js file paths in /routes directory and create express router for every case
 */
import { Application } from 'express';
import { userRouter } from './users';
import { exercisesRouter } from './exercises';

// const router = Router();

function createRouter(app: Application) {
  app.use('/api', userRouter, exercisesRouter);

}

export { createRouter };
