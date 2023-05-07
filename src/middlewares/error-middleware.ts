import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function errorMiddleware(err: AppError, req: Request, res: Response, next: NextFunction) {
  console.error('[ERROR_MIDDLEWARE] ERROR: ', err);

  const response: { code: number; status: number; message: string; stack: string } = {
    code: err.code || AppError.ErrorCode.Default,
    status: err.status || AppError.ErrorStatus.InternalServerError,
    message: err.message || AppError.ErrorMessage.SomethingWentWrong,
    stack: err.stack,
  };

  return res.status(response.status).json(response);
}

// eslint-disable-next-line @typescript-eslint/ban-types
const handleErrorAsync = (func: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware, handleErrorAsync };
