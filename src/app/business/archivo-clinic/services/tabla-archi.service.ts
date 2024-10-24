import { Injectable } from '@angular/core';
import Tabla_arch from '../interfaces/Tabla_Arch';
@Injectable({
  providedIn: 'root'
})
export class TablaArchiService {
  tabla_data: Tabla_arch[]
  constructor() {
    this.tabla_data=
    [{
      expediente: "14423",
      nombre: 'alexiiis',
      ap_paterno: 'gomez',
      ap_materno: 'torres',
      fecha: '21-02-2019',
      elabora: 'Juanito banana',
      matri: '12012021'
    }]
   }
   agregarData(tabla: Tabla_arch){
    this.tabla_data.push(tabla)
      }
}

