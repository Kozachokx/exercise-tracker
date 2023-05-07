import db from '../../../database';
import { AppError } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';
import { DeleteExerciseDto } from './dto';

export async function deleteById(params: DeleteExerciseDto): Promise<ApiResponse<any>> {
  try {
    const data: { success: boolean; message?: string } = {
      success: true,
    };

    const exercise = await db.exercise.findFirst({
      where: {
        id: params.exerciseId,
      },
    });

    if (!exercise) {
      throw new AppError({
        message: AppError.ErrorMessage.ExerciseNotFound,
        status: AppError.ErrorStatus.NotFound,
        code: AppError.ErrorCode.ExerciseNotFound,
      });
    }

    if (exercise.userId !== params.userId) {
      throw new AppError({
        message: AppError.ErrorMessage.ExerciseDeleteForbiden,
        status: AppError.ErrorStatus.Forbidden,
        code: AppError.ErrorCode.ExerciseDeleteForbiden,
      });
    }

    await db.exercise.delete({
      where: {
        oid: exercise.oid,
      },
    });

    return { data };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
