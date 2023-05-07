import db from '../../../database';
import { SortTypeEnum } from '../../../enums';
import { AppError } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';

// Only for testing purposes
export async function getAll(): Promise<ApiResponse<any>> {
  try {
    const exercises = await db.exercise.findMany({
      orderBy: {
        date: SortTypeEnum.DESC,
      },
    });

    return { data: exercises };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
