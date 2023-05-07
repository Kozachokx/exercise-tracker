import db from '../../../database';
import { AppError } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';

export async function deleteById(id: number): Promise<ApiResponse<any>> {
  try {
    // Transaction to delete all User Execrices
    const data: { success: boolean; message?: string } = {
      success: true,
    };

    const exists = await db.user.findFirst({
      where: {
        id,
      },
    });

    if (!exists) {
      throw new AppError({
        message: AppError.ErrorMessage.UserNotFound,
        status: AppError.ErrorStatus.NotFound,
        code: AppError.ErrorCode.UserNotFound,
      });
    }

    const users = await db.user.delete({
      where: { id },
    });

    console.log('Deleted user: ', users);

    return { data };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
