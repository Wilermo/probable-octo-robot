import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redirigirAOtroProyecto() {
    window.location.href = 'URL_DEL_OTRO_PROYECTO_ANGULAR';
  }
}
