import { Router } from 'express';

import { UserController } from '../../core/controller';
import { handleErrorAsync } from '../../middlewares/error-middleware';
import { validateBody, validateParams } from '../../middlewares/validator-middleware';
import { CreateUserSchema, QueryUserIdSchema } from './schemas';

const router = Router();

// [C] Create user
router.post('/', validateBody(CreateUserSchema), handleErrorAsync(UserController.UserCreate));

// [R] Get all users
router.get('/', handleErrorAsync(UserController.UserGetAll));

// [R] Get one user by id
router.get('/:id', validateParams(QueryUserIdSchema), handleErrorAsync(UserController.UserGetOne));

// [R] Get user logs
router.get('/:id/logs', validateParams(QueryUserIdSchema), handleErrorAsync(UserController.UserGetLogs));

// [D] Delete user by id
router.delete('/:id', validateParams(QueryUserIdSchema), handleErrorAsync(UserController.UserDelete));

export { router };
