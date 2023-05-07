import db from '../../../database';
import { SortTypeEnum } from '../../../enums';
import { AppError, removeFieldsFromObject } from '../../../utils';
import { ApiResponse } from '../../../utils/shared/dto';

export async function getAll(): Promise<ApiResponse<any>> {
  try {
    // users sort by id

    // const options = {
    //   orderBy: 'id',
    //   sortType: 'ASC',
    // };

    // const pagination = {
    //   page: 0,
    //   limit: 10,
    // };

    const users = await db.user.findMany({
      orderBy: {
        id: SortTypeEnum.ASC,
      },
    });

    return { data: users.map((user) => removeFieldsFromObject(user, 'oid')) };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
