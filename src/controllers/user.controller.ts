import { Request, Response } from 'express';
import {connect} from '../database';

export async function getUser(req: Request, res: Response){
  const conn = await connect();
  const users = await conn.query('SELECT * FROM users');
  res.json(users[0]);
}
