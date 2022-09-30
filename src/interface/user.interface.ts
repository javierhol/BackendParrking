
  export interface Admin{
    idAdmin: Number;
    nombre: String;
    documento: Number;
    telefono: Number;
    correo:String;
  }

  export interface Users{
    idUser?: Number;
    idAmin1?: Number;
    nombre?: String; 
    telefono?: Number;
    hora_llegada?: String;
    hora_salida?: String;
  }

  export interface estacionamiento {
    idEstacio?: Number;
    idVehi?: Number;
    idUser?: Number;
    horaEntrada?: String;
    horaSalida?: String;
    numeroAsignado?: Number;

  }

  export interface vehiculo{
    idVehi?: Number;
    idEstacio1?: Number;
    placa?:Number;
    tipoVehiculo?: String;
  }

  export interface typeVehicle{
    idvehi?: Number;
    idEstacio2?: Number;
    descripcion?:String;
    valor?: Number; 
  }

  export interface factura{
    idVehi3?: Number;
    idEstacio3?: Number;
    valor?: Number;
  }