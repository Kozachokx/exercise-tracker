import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { AppError } from '../utils/error-handler';

// joi schema
export function validateBody(schema: joi.ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body || !Object.keys(req.body).length) {
      return next({
        code: AppError.ErrorCode.ValidationError,
        status: AppError.ErrorStatus.BadReqeust,
        message: AppError.ErrorMessage.RequestBodyEmpty,
      });
    }
    const { body } = req;
    const { error } = schema.validate(body);

    if (error) {
      return next({
        code: AppError.ErrorCode.ValidationError,
        status: AppError.ErrorStatus.BadReqeust,
        message: error.message || AppError.ErrorMessage.NotValidDataInBody,
      });
    }
    return next();
  };
}

export function validateParams(schema: joi.ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.params || !Object.keys(req.params).length) {
      return next({
        code: AppError.ErrorCode.ValidationError,
        status: AppError.ErrorStatus.BadReqeust,
        message: AppError.ErrorMessage.RequestParamsEmpty,
      });
    }
    const { params } = req;
    const { error } = schema.validate(params);
    if (error) {
      return next({
        code: AppError.ErrorCode.ValidationError,
        status: AppError.ErrorStatus.BadReqeust,
        message: error.message || AppError.ErrorMessage.NotValidDataInParams,
      });
    }
    return next();
  };
}

export function validateQuery(schema: joi.ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.query || !Object.keys(req.query).length) {
      return next({
        code: AppError.ErrorCode.ValidationError,
        status: AppError.ErrorStatus.BadReqeust,
        message: AppError.ErrorMessage.RequestQueryEmpty,
      });
    }

    const { query } = req;
    const { error } = schema.validate(query);

    if (error) {
      return next({
        code: AppError.ErrorCode.ValidationError,
        status: AppError.ErrorStatus.BadReqeust,
        message: error.message || AppError.ErrorMessage.NotValidDataInQuery,
      });
    }

    return next();
  };
}
