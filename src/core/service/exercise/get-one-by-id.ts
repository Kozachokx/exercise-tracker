import db from '../../../database';
import { AppError } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';

export async function getOneById({
  userId,
  exerciseId,
}: {
  userId: number;
  exerciseId: number;
}): Promise<ApiResponse<any>> {
  try {
    const exercise = await db.exercise.findFirst({
      where: {
        id: exerciseId,
        AND: {
          userId,
        },
      },
    });

    if (!exercise) {
      throw new AppError({
        message: AppError.ErrorMessage.ExerciseNotFound,
        status: AppError.ErrorStatus.NotFound,
        code: AppError.ErrorCode.UserNotFound,
      });
    }

    return { data: exercise };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
