export class Citas{
    _id?: number;
    nombre: string;
    numeroTelefono: number;
    fechaCita: Date;
    identificacion:number;

    constructor(nombre: string, numeroTelefono: number, fechaCita:Date, identificacion:number){
        this.nombre = nombre;
        this.numeroTelefono = numeroTelefono;
        this.fechaCita = fechaCita;
        this.identificacion = identificacion

    }
}