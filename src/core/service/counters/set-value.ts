import db from '../../../database';
import { AppError } from '../../../utils';

export async function setCounterValue(sequenceName: string, throwError = false): Promise<any> {
  try {
    const exists = await db.counters.findFirst({ where: { id: sequenceName } });

    if (!exists && throwError) {
      throw new AppError({
        message: `Sequence '${sequenceName}' not exists!`,
      });
    }

    if (!exists) {
      await db.counters.create({
        data: {
          counterName: sequenceName,
          sequenceValue: 0,
        },
      });

      return { counter: 0 };
    }

    const updated = await db.counters.update({
      data: { sequenceValue: exists.sequenceValue + 1 },
      where: { id: sequenceName },
    });

    return { counter: updated.sequenceValue };
  } catch (error) {
    console.log(error);

    throw new AppError(error);
  }
}
