import {createPool} from "mysql2/promise";

export async function connect() {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "Parking",
  });
  return connection;

}
  
