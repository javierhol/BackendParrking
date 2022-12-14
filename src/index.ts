import express,{ Request, Response }  from "express"
import morgan from "morgan";
 import cors from "cors"
// import { PORT } from "../config/Config"
import  router from "./routes/index.routes"
import path from "path"
 import sessions from "express-session"
 import cookieParser from "cookie-parser"

async function Server() {
    
    try {
        const appServer: express.Application = express();
    const timeEXp = 1000 * 60 * 60 * 24;
    appServer.use(
      sessions({
        secret: "rfghf66a76ythggi87au7td",
        saveUninitialized: true,
        cookie: { maxAge: timeEXp },
        resave: false,
      })
    );
    
    appServer?.use(cors());
    appServer?.use(cookieParser());
    appServer?.set( "views", path.join( __dirname, "views" ))
    appServer?.use(express.json() )
    appServer?.use(express.urlencoded({ extended: true }))
     appServer?.use(router)
    appServer?.use(( req: Request, res: any, next ): String => {
        
       return res.status(404).json({message:"Esta ruta no existe"})
         
     })
    appServer.listen(3000, (): String |any| Number => {
        console.log("Conectado en el puerto:",3000);
        
    } )
       
       
    } catch (error: any) {
        
        throw new Error(error)
    }

  
}

Server();
