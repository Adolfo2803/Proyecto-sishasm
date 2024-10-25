import { Injectable } from '@angular/core';
import Ausencias from '../Interfaces/Ausencias';

@Injectable({
  providedIn: 'root'
})
export class AusenciasService {

  ausencias: Ausencias[];
 

  constructor() {
    this.ausencias= [
      {
      
    name:"Ivan",
    registro: "Oliver",
    autorizo: "Nayomi",
    motivo:"Fiebre",
    fecha_inicio:"23-10-24",
    fecha_termino:"24-10-24",
    }]
    
   }

agregarAusencia(ausencias: Ausencias){
  this.ausencias.push(ausencias)
}
   
}
