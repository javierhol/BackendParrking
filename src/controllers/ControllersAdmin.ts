import { Request, Response } from "express"
import { conexion } from "../database"
import { Admin } from "../interface/user.interface"
import {AdminData} from "../class/AdminUser"
class ControllersAdmin {
    public async Signup( req: Request, res: Response ): Promise<any>{
        try {
            const { id, nombre, documento, telefono, correo } = req.body;
            console.log( req.body );
            const result =  new AdminData( id, nombre, documento, telefono, correo );
            const post = await result.SigupData()
            console.log("----",result);
            
            if ( result.nombre ) {
                res.json({message: "Datos registrados"})
                
            } else {
                 res.json({message: "Datos no resgistrado"})
            }
        } catch ( error ) {
            res.json({message:"Error 404"})
            
        }   
    }

    public async signup( req: Request, res: Response ): Promise<any> {
        const { correo, documento } = req.body;
        const connectDb = await conexion.connect();
        connectDb.query( "SELECT documento FROM admin WHERE correo = ? "[correo], ( rows, error ) => {
            
            console.log(rows);
            
                
                    
                
            
        })
    }

}

export const controllersAdmin = new ControllersAdmin();