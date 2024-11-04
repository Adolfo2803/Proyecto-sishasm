export default interface Paciente {
    id: number;
    expediente: string;
    paciente: string;
    ap_paterno: string;
    ap_materno: string;
    sexo: string;
    edad:number;
    curp: string;
    domicilio:string;
    telefono: string;    
    elaboro: string;
    fecha_elab: Date;
    ubicacion: string;
    status: number;
    cirugiaList: [];
} 