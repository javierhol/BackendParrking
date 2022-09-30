import {createPool} from "mysql";
class Conexion {
  async  connect() {
   const connection = await createPool({
     host: "localhost",
     user: "root",
     port: 3306,
     database: "Parking",
   });
   return connection;
}
}
export const  conexion = new  Conexion();
  
