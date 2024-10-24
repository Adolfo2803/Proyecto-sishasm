import { Injectable } from '@angular/core';
import Ausencias from '../Interfaces/Ausencias';

@Injectable({
  providedIn: 'root'
})
export class AusenciasService {

  tabla:Ausencias[]
 

  constructor() {
    this.tabla=
    [{
    name:"Ivan",
    registro: "Oliver",
    motivo:"Fiebre",
    fecha_inicio:"14/10/3034",
    fecha_termino:"18/10/2024",
    }]
    
   }
insertarDato(tabla: Ausencias){
  this.tabla.push(tabla)
}
   
}
