import joi from 'joi';

import { username } from '../../../validation-models';

export const CreateUserSchema = joi.object({
  username: username.required(),
});
