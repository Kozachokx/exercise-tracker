import { AppError } from '../error-handler';

const notFoundException = (message: string) => {
  throw new AppError({
    status: AppError.ErrorStatus.NotFound,
    code: 'NotFoundException',
    message: message || 'Not Found Exception',
  });
};

export { notFoundException };
