import { Request, Response } from "express"
import { conexion } from "../database"
import { Admin } from "../interface/user.interface"
import {AdminData} from "../class/AdminUser"
import session, { Session } from "express-session";
 class ControllersAdmin extends AdminData  {
  constructor(){

    super(0,"",0,0,"")
  }
   
    public async Signup( req: Request, res: Response ): Promise<any>{     
        
        try {
            const { id, nombre, documento, telefono, correo } = req.body;
            console.log( req.body );
            const result =  new AdminData( id, nombre, documento, telefono, correo );
            const post = await this.SigupData()
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
                    console.log(sessions);
                    
                  return   res.send("Autenticado");
                    
                    
                }else{
                  return res.send("no autenticado");
                    
                }
                }

            

                
            
        })
    }

}

export const controllersAdmin = new ControllersAdmin();