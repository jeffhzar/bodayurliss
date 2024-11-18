import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  ubicacion(){
    window.open('https://maps.app.goo.gl/qqBWHYTZpH7jZDKY7?g_st=com.google.maps.preview.copy');
  }
  confirmaNovio(){
    window.open('https://wa.me/+50685328910?text=¡Hola!%20Confirmo%20mi%20asistencia.');

  } confirmaNovia(){
    window.open('https://wa.me/+50686641432?text=¡Hola!%20Confirmo%20mi%20asistencia.');

  }
}
