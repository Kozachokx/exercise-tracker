import db from '../../../database';
import { AppError, removeFieldsFromObject } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';

export async function getOneById(id: number): Promise<ApiResponse<any>> {
  try {
    if (Number.isNaN(id) || id < 0) {
      throw new AppError({
        message: `Provided userId: '${id}', is incorrect!`,
        status: AppError.ErrorStatus.BadReqeust,
        code: AppError.ErrorCode.BadParameters,
      });
    }

    const user = await db.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new AppError({
        message: AppError.ErrorMessage.UserNotFound,
        status: AppError.ErrorStatus.NotFound,
        code: AppError.ErrorCode.UserNotFound,
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { oid, ...data } = user;

    return { data: removeFieldsFromObject(user, 'oid') };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
