  

  export interface Admin{
    idAdmin: number;
    nombre: string;
    documento: number;
    telefono: number;
    correo:string;
  }

  export interface Users{
    idUser: number;
    nombre: string; 
    telefono: number;
    horaEntrada: string;
    horaSalida: string;
  }

  export interface estacionamiento {
    idEstacio: number;
    idVehi: number;
    idUser: number;
    horaEntrada: string;
    horaSalida: string;
    numeroAsignado: number;

  }

  export interface vehiculo{
    idVehi: number;
    idEstacio1: number;
    placa:number;
    tipoVehiculo: string;
  }

  export interface tipoVehiculo{

  }