/**
 * Read router.js file paths in /routes directory and create express router for every case
 */
import { Router } from 'express';
import { router } from './router';

const exercisesRouter = Router();

exercisesRouter.use('/', router);

export { exercisesRouter };
