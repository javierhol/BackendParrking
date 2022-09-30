import { Request, Response } from "express";
import { conexion } from "../database";

import { Users,typeVehicle, factura} from "../interface/user.interface";

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
  console.log(newUser);
  let sessions;
  sessions = req?.session!;
  if (sessions.idUser) {
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
  }else{
    res.send({ message:"No se ha iniciado sesion" })
  }


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

export async function tipoVehiculo(req: Request, res: Response){
  const newTypeVehicle: typeVehicle = req.body;
  const conn = await conexion.connect();
    await conn.query("INSERT INTO tipo_vehiculo SET ?", [newTypeVehicle], (error, rows) => {
      if (rows) {
        res.json({
          message: "Vehiculo creado",
        });
      } else {
        res.json({ message: error });
      }
    });
}


export async function factura(req: Request, res: Response){
  const conn = await conexion.connect();
  conn.query("SELECT * FROM factura", (error, rows) => {
    if (rows) {
      res.send(rows);
    } else {
      res.send(error);
    }
  });
}
