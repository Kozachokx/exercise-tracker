/**
 * Read router.js file paths in /routes directory and create express router for every case
 */
import { Router } from 'express';
import { router } from './router';

const userRouter = Router();

userRouter.use('/users', router);

export { userRouter };
