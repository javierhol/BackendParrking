import { Request, Response } from 'express';
import {conexion} from '../database';

export async function getUser(req: Request, res: Response){
  const conn = await conexion.connect();
  const users = await conn.query('SELECT * FROM users');
  res.json(users[0]);
}
