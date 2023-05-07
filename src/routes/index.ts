/**
 * Read router.js file paths in /routes directory and create express router for every case
 */
import { Application } from 'express';
import { usersRouter } from './users';
import { exercisesRouter } from './exercises';

// const router = Router();

function createRouter(app: Application) {
  usersRouter(app);
  exercisesRouter(app);
}

export { createRouter };
