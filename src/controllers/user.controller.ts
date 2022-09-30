import { Request, Response } from "express";
import { conexion } from "../database";

import { Users } from "../interface/user.interface";

export async function getUsers(req: Request, res: Response) {
  const conn = await conexion.connect();
  conn.query("SELECT * FROM users", (error, rows) => {
    if (rows) {
      res.send(rows);
    } else {
      res.send(error);
    }
  });
}

export async function createUser(req: Request, res: Response) {
  const newUser: Users = req.body;
  
  const conn = await conexion.connect();
  await conn.query("INSERT INTO users SET ?", [newUser], (error, rows) => {
    if (rows) {
      res.json({
        message: "User created",
      });
    } else {
      res.json({ message: error });
    }
  });
}

export async function getUser(req: Request, res: Response): Promise<any> {
  const id = req.params.userId;
  const conn = await conexion.connect();
  conn.query("SELECT * FROM users WHERE id = ?", [id], (error, rows) => {
    if (rows) {
      return res.json(rows);
    } else {
      return res.json(error);
    }
  });
}
