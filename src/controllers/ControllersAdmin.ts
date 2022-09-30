import { Request, Response } from "express"
import { conexion } from "../database"
import { Admin } from "../interface/user.interface"
import {AdminData} from "../class/AdminUser"
import session, { Session } from "express-session";
import {estacionamiento, vehiculo} from "../interface/user.interface"
class ControllersAdmin {
    public async Signup( req: Request, res: Response ): Promise<any>{
        
        try {
            const { id, nombre, documento, telefono, correo } = req.body;
            console.log( req.body );
            const result =  new AdminData( id, nombre, documento, telefono, correo );
            const post = await result.SigupData()
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
        const connectDb = await conexion.connect();
        connectDb.query("SELECT  documento, idAdmin FROM admin WHERE documento = ? ",
        [req.body.documento], async (error, rows) => {
              
              if (rows ) {
                const passDocument = await rows[0].documento; 
                
                if (passDocument == req.body.documento) {
                  
                  let sessions;
                  
                    sessions = req?.session!
                    sessions.idUser = rows[0].idAdmin;
                  return   res.send("Autenticado");
                    
                }else{
                  return res.send("no autenticado");
                    
                }
                }
        })
    }
  public async parkingPost( req: Request, res: Response ): Promise<any> {
    const postData:estacionamiento = req.body;
        const connectDb = await conexion.connect();
        connectDb.query("INSERT INTO estacionamiento SET ? ",[postData],
         async (error, rows) => {
             
           if ( rows ) {
                  
             res.json( { info:"Los datos fueron registrados",message:rows})
           } else {
             
             res.json( { info:"Los datos no se acrualizaron",message:error})
                }
        })
  }
   public async parkingvehiculo( req: Request, res: Response ): Promise<any> {
    const postData:vehiculo = req.body;
        const connectDb = await conexion.connect();
        connectDb.query("INSERT INTO vehiculo SET ? ",[postData],
         async (error, rows) => {
             
           if ( rows ) {
                  
             res.json( { info:"Los datos fueron registrados",message:rows})
           } else {
             
             res.json( { info:"Los datos no se acrualizaron",message:error})
                }
        })
  }
     public async factura( req: Request, res: Response ): Promise<any> {
    const postData:vehiculo = req.body;
        const connectDb = await conexion.connect();
        connectDb.query("INSERT INTO factura SET ? ",[req.body],
         async (error, rows) => {
             
           if ( rows ) {
                  
             res.json( { info:"Los datos fueron registrados",message:rows})
           } else {
             
             res.json( { info:"Los datos no se acrualizaron",message:error})
                }
        })
    }
}

export const controllersAdmin = new ControllersAdmin();