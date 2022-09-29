import { Request, Response } from 'express';
import {conexion} from '../database';

import {Users} from '../interface/user.interface';

export async function getUsers  (req: Request, res: Response){
  const conn = await conexion.connect();
  const users = await conn.query('SELECT * FROM users');
 return res.json(users);
}

export async function createUser(req: Request, res: Response){
  const newUser: Users = req.body;
  const conn = await conexion.connect();
  await conn.query('INSERT INTO users SET ?', [newUser]);
 return res.json({
    message: 'User created'
  });
}

export async function getUser(req: Request, res: Response): Promise<Response>{
  const id = req.params.userId;
  const conn = await conexion.connect();
  const users = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
  return res.json(users);
}
