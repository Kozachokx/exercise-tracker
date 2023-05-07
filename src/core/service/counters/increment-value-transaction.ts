// getNextSequenceValue(sequenceName){
//   var sequenceDocument = db.counters.findAndModify({
//      query:{_id: sequenceName },
//      update: {$inc:{sequence_value:1}},
//      new:true
//   });
//   return sequenceDocument.sequence_value;
// }

import { PrismaClient, Prisma } from '@prisma/client';

import db from '../../../database';
import { AppError } from '../../../utils';

export async function incrementCounterTransaction(
  sequenceName: string,
  transaction: Omit<
    PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>,
    '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
  >,
): Promise<any> {
  try {
    const exists = await transaction.counters.findFirst({ where: { id: sequenceName } });

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
