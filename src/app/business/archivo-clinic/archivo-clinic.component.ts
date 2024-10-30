import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaArchiService } from './services/tabla-archi.service';
import { RouterOutlet } from '@angular/router';
import { ArchivoTableComponent } from './components/archivo-table/archivo-table.component';
import Tabla_arch from './interfaces/Tabla_Arch';

@Component({
  selector: 'app-archivo-clinic',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet,ArchivoTableComponent],
  templateUrl: './archivo-clinic.component.html',
  styleUrl: './archivo-clinic.component.css'
})
export default class ArchivoClinicComponent {
  constructor(public tabla_archive: TablaArchiService){}

  form: FormGroup = new FormGroup
  ({
   expediente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ap_paterno: new FormControl('', Validators.required),
    ap_materno: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    curp: new FormControl('', Validators.required),
    domicilio: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    elabora: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });
  
  agregarData(){
    localStorage.setItem('form', JSON.stringify(this.form.value));
    const formStorage = JSON.parse(localStorage.getItem('form')!) as Tabla_arch;
    
      console.log(this.form.value);
      this.tabla_archive.agregarData(this.form.value);
    
      }  
      resetForm(){
        this.form.reset();
      }
}

