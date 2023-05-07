// import { logger } from '../../../utils';
import db from '../../../database';
import { CounterEnum } from '../../../enums';
import { AppError } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';
import { CreateExerciseDto } from './dto';

export async function save(params: CreateExerciseDto): Promise<ApiResponse<any>> {
  try {
    const { userId, ...exerciseData } = params;

    const user = await db.user.findFirst({
      where: {
        id: Number(userId),
      },
    });

    if (!user) {
      throw new AppError({
        message: AppError.ErrorMessage.UserNotFound,
        code: AppError.ErrorCode.Default,
        status: AppError.ErrorStatus.BadReqeust,
      });
    }

    const newExercise = await db.$transaction(
      async (tx) => {
        const counterExists = await tx.counters.findFirst({ where: { counterName: CounterEnum.ExerciseId } });

        const counter = counterExists ? counterExists?.sequenceValue + 1 : 0;

        if (!counterExists) {
          await tx.counters.create({
            data: {
              counterName: CounterEnum.ExerciseId,
              sequenceValue: 0,
            },
          });
        } else {
          await tx.counters.update({
            data: { sequenceValue: counter },
            where: { counterName: CounterEnum.ExerciseId },
          });
        }

        return await tx.exercise.create({
          data: {
            ...exerciseData,
            id: counter,
            userId: Number(userId),
          },
          include: {
            user: true,
          },
        });
      },
      {
        maxWait: 5000, // default: 2000
        timeout: 10000, // default: 5000
      },
    );

    return { data: newExercise };
  } catch (error) {
    console.log(error);
    throw new AppError(error);
  }
}
