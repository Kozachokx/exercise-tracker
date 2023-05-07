import { userId, username } from '../../validation-models';

import joi from 'joi';

export const QueryUserIdSchema = joi.object({
  id: userId.required(),
});

export const CreateUserSchema = joi
  .object()
  .keys({
    data: joi.object().keys({
      username: username.required(),
    }),
  })
  .required();
