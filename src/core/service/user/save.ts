// import { logger } from '../../../utils';
import db from '../../../database';
import { CounterEnum } from '../../../enums';
import { AppError } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';
import { CreateUserDto } from './dto';

export async function save(params: CreateUserDto): Promise<ApiResponse<any>> {
  try {
    // Username is CaseSensitive.
    const exists = await db.user.findFirst({
      where: {
        username: params.username,
      },
    });

    if (exists) {
      throw new AppError({
        message: `User with username: '${params.username}' already exists!`,
        code: AppError.ErrorCode.Default,
        status: AppError.ErrorStatus.Conflict,
      });
    }

    const result = await db.$transaction(
      async (tx) => {
        const counterExists = await tx.counters.findFirst({ where: { counterName: CounterEnum.UserId } });

        const counter = counterExists ? counterExists?.sequenceValue + 1 : 0;

        if (!counterExists) {
          await tx.counters.create({
            data: {
              counterName: CounterEnum.UserId,
              sequenceValue: 0,
            },
          });
        } else {
          await tx.counters.update({
            data: { sequenceValue: counter },
            where: { counterName: CounterEnum.UserId },
          });
        }

        return await tx.user.create({
          data: {
            ...params,
            id: counter,
          },
          select: {
            id: true,
            username: true,
          }
        });
      },
      {
        maxWait: 5000, // default: 2000
        timeout: 10000, // default: 5000
      },
    );

    return { data: result };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
