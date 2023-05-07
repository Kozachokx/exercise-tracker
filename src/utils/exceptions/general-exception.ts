import { AppError } from '../error-handler';

const generalException = (message: string, statusCode: number) => {
  throw new AppError({
    status: statusCode || AppError.ErrorStatus.InternalServerError,
    code: 'GeneralException',
    message: message || 'General Exception',
  });
};

export { generalException };
