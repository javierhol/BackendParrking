import { Request, Response } from "express"
import { conexion } from "../database"
import {Admin} from "../interface/user.interface"
export class AdminData{

    private id: Number=0;
    public nombre: String = "";
    private documento: Number = 0;
    private telefono: Number = 0;
    private correo: String = "";

    constructor( id:Number, nombre:String, documento:Number, telefono:Number, correo:String ) {
        
        this.id = id;
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.correo = correo
    }
    public async SigupData() {
       const connectDb = await conexion.connect();
            connectDb.query("INSERT INTO admin(idAdmin, nombre, documento, telefono, correo) VALUES (?, ?, ?, ?, ?)",
                [this.id, this.nombre,  this.documento, this.telefono, this.correo], (error, rows) => {
                    if ( rows ) {
                        let state = "Insertado"
                        return state
                    
                    } else {
                        let stateI = "error"
                        return stateI
                    }
                })
    }

}
