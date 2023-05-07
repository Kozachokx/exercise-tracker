/**
 * Read router.js file paths in /routes directory and create express router for every case
 */
import { Application } from 'express';
import { router } from './router';

function usersRouter(app: Application) {
  app.use('/users', router);
}

export { usersRouter };
