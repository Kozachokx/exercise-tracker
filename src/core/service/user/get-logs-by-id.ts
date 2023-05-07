import db, { exercise } from '../../../database';
import { UserExercisesLog } from '../../../database/models/UserExerciseLog';
import { AppError } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';
import { duration } from '../../../validation-models';

export async function getLogsById(id: number): Promise<ApiResponse<UserExercisesLog>> {
  try {
    if (Number.isNaN(id) || id < 0) {
      throw new AppError({
        message: `Provided userId: '${id}' is incorrect!`,
        status: AppError.ErrorStatus.BadReqeust,
        code: AppError.ErrorCode.BadParameters,
      });
    }

    const user = await db.user.findFirst({
      where: {
        id,
      },
      include: {
        exercises: true,
        _count: true,
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

    const response: UserExercisesLog = {
      id: user.id,
      username: user.username,
      logs: user.exercises.map((exercise) => ({
        id: exercise.id,
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date,
      })),
      count: user._count.exercises,
    };

    return { data: response };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
