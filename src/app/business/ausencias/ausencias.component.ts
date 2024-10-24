import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ausencias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ausencias.component.html',
  styleUrl: './ausencias.component.css'
})
export default class AusenciasComponent {
  ausenciasForm = new FormGroup({
    nombreEnfermero: new FormControl(''),
    registroDoctor: new FormControl(''),
    motivo: new FormControl(''),
    fechaInicio: new FormControl(''),
    fechaTermino: new FormControl(''),
  })

 
  onSubmit() {
    console.log(this.ausenciasForm.value);
  }

  Guardar() {
    if (this.ausenciasForm.valid) {
      console.log('Datos del formulario:', this.ausenciasForm.value);
      alert('Formulario guardado correctamente!');
    } else {
      alert('El formulario no es válido. Por favor, rellena todos los campos requeridos.');
    }
  }
  }
  
