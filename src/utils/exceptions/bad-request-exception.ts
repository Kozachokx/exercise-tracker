import { AppError } from '../error-handler';

const wrongRequestException = (message: string) => {
  throw new AppError({
    status: AppError.ErrorStatus.BadReqeust,
    code: 'BadRequestException',
    message: message || 'Bad request',
  });
};

export { wrongRequestException };
