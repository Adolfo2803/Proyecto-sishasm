import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AusenciasService } from './Services/ausencias.service';
import Ausencias from './Interfaces/Ausencias';
import { TablaArchiService } from '../archivo-clinic/services/tabla-archi.service';
import { ArchivoTableComponent } from '../archivo-clinic/components/archivo-table/archivo-table.component';

@Component({
  selector: 'app-ausencias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ausencias.component.html',
  styleUrl: './ausencias.component.css'
})
export default class AusenciasComponent {

  

  constructor (private ausenciasService: AusenciasService){}
  ausenciasForm = new FormGroup
  ({
    nombreEnfermero: new FormControl(''),
    registroDoctor: new FormControl(''),
    motivo: new FormControl(''),
    fechaInicio: new FormControl(''),
    fechaTermino: new FormControl(''),
  })

  agregarData(){
   
     this.ausenciasService.insertarDato(this.ausenciasForm.value);
     
 
  }

  
 
 
  }
  
