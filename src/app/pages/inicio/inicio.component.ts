import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  showAlert() {

    Swal.fire({
      title: 'Sugerencias',
      html: 'Agradecemos que sus muestras de cariño sean en efectivo.<br> Sin embargo, le sugerimos las siguientes opciones:<br>Opción 1: Un sobre el día de la boda. <br> Opción 2: Vía Sinpe al número 85328910 o 86641432. <br>Opción 3: Regalo presencial.'
  ,
  customClass: {
    confirmButton: 'ubicacion'  // Clase personalizada para el botón de confirmación
  },
      icon: 'question', 
      timerProgressBar: true, 
      confirmButtonText: 'Entendido'
    });
  }
  

  ubicacion(){
    window.open('https://maps.app.goo.gl/qqBWHYTZpH7jZDKY7?g_st=com.google.maps.preview.copy');
  }
  confirmaNovio(){
    window.open('https://wa.me/+50685328910?text=¡Hola!%20Confirmo%20mi%20asistencia.');

  } confirmaNovia(){
    window.open('https://wa.me/+50686641432?text=¡Hola!%20Confirmo%20mi%20asistencia.');

  }
}
