import db from '../../../database';
import { AppError } from '../../../utils';

export async function getCounterValue(sequenceName: string): Promise<any> {
  try {
    const exists = await db.counters.findFirst({ where: { counterName: sequenceName } });

    return exists?.sequenceValue || null;
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
