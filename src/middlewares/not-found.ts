import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils';

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  next(
    new AppError({
      status: AppError.ErrorStatus.NotFound,
      code: AppError.ErrorCode.RouteNotFound,
      message: `${AppError.ErrorMessage.RouteNotFound}::: URL : ${req.originalUrl}`,
    }),
  );
}
