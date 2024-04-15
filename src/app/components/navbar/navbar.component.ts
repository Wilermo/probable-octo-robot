import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  redirigirAOtroProyecto() {
    window.location.href = 'URL_DEL_OTRO_PROYECTO_ANGULAR';
  }
}
