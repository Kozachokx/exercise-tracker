/**
 * Read router.js file paths in /routes directory and create express router for every case
 */
import { Application } from 'express';
import { router } from './router';

function exercisesRouter(app: Application) {
  app.use(router);
}

export { exercisesRouter };
