import { Request, Response } from 'express';
import { HttpCodeEnum } from '../../enums';
import { UserService } from '../service';

/**
 * Controller
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function UserCreate(req: Request, res: Response): Promise<any> {
  const result = await UserService.save(req.body.data);
  return res.status(HttpCodeEnum.Created).send(result);
}

export async function UserGetOne(req: Request, res: Response): Promise<any> {
  const { id } = req.params;

  const result = await UserService.getOneById(Number(id));
  return res.status(HttpCodeEnum.Ok).send(result);
}

export async function UserGetAll(req: Request, res: Response): Promise<any> {
  const users = await UserService.getAll();
  return res.status(HttpCodeEnum.Ok).send(users);
}

export async function UserGetLogs(req: Request, res: Response): Promise<any> {
  const { id } = req.params;

  const result = await UserService.getLogsById(Number(id));
  return res.status(HttpCodeEnum.Ok).send(result);
}

export async function UserDelete(req: Request, res: Response): Promise<any> {
  // For Security Reasosns it is better to add Authorisation
  // To allow only user to delete himself or Admin (By JWT Token)
  const { id } = req.params;

  const result = await UserService.deleteById(Number(id));
  return res.status(HttpCodeEnum.Ok).send(result);
}
