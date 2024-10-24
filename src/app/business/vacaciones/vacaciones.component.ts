import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vacaciones.component.html',
  styleUrl: './vacaciones.component.css'
})
export default class VacacionesComponent {
  vacacionesForms = new FormGroup({
    nombreEnfermero: new FormControl(''),
    registroDoctor: new FormControl(''),
    motivoVacaciones: new FormControl(''),
    fechaInicioVacaciones: new FormControl(''),
    fechaTerminoVacaciones: new FormControl(''),

  })
  
  onSubmit() {
    console.log(this.vacacionesForms.value);
  }

  Guardar() {
    if (this.vacacionesForms.valid) {
      console.log('Datos del formulario:', this.vacacionesForms.value);
      alert('Formulario guardado correctamente!');
    } else {
      alert('El formulario no es válido. Por favor, rellena todos los campos requeridos.');
    }
  }
  }