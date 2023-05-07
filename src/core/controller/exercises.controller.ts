import { Request, Response } from 'express';
import { HttpCodeEnum } from '../../enums';
import { ExerciseService } from '../service';

/**
 * Controller
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function ExerciseCreate(req: Request, res: Response): Promise<any> {
  const { userId } = req.params;
  const { data } = req.body;

  data.date = data.date ? new Date(data.date) : new Date();

  const result = await ExerciseService.save({ ...data, userId });
  return res.status(HttpCodeEnum.Created).send(result);
}

export async function ExerciseGetOne(req: Request, res: Response): Promise<any> {
  const { userId, exerciseId } = req.params;

  const params = {
    userId: Number(userId),
    exerciseId: Number(exerciseId),
  };

  const result = await ExerciseService.getOneById(params);
  return res.status(HttpCodeEnum.Ok).send(result);
}

export async function ExerciseGetAll(req: Request, res: Response): Promise<any> {
  const Exercises = await ExerciseService.getAll();
  return res.status(HttpCodeEnum.Ok).send(Exercises);
}

export async function ExerciseDelete(req: Request, res: Response): Promise<any> {
  // For Security Reasosns it is better to add Authorisation
  // To allow only Exercise to delete himself or Admin (By JWT Token)
  const { userId, exerciseId } = req.params;

  const params = {
    userId: Number(userId),
    exerciseId: Number(exerciseId),
  };

  const result = await ExerciseService.deleteById(params);
  return res.status(HttpCodeEnum.Ok).send(result);
}
