import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda-cirugias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './busqueda-cirugias.component.html',
  styleUrl: './busqueda-cirugias.component.css'
})
export default class BusquedaCirugiasComponent {

 
  //botones escondidos
  botonSeleccionado: string | null = null; // Para almacenar el botón seleccionado

  ocultarBotones(nombreBoton: string) {
    this.botonSeleccionado = nombreBoton === this.botonSeleccionado ? null : nombreBoton;
  
    console.log("Botones ocultos jijiji"); // Esto ayuda a verificar si se ejecuta el método
  }

   //Se define el formulario
   busquedaCForm: FormGroup;

   constructor() {
     // se inicializa el formulario con los campos
     this.busquedaCForm = new FormGroup({
       search: new FormControl('', [Validators.required, Validators.minLength(3)]),  // Campo de búsqueda con validación
       table: new FormControl('', Validators.required)  // Campo de tabla requerido
     });
   }
   onSubmit() {
     if (this.busquedaCForm.valid) {
       console.log('Formulario válido, datos enviados:', this.busquedaCForm.value);
     } else {
       console.log('Formulario inválido');
     }
   }
   

}
