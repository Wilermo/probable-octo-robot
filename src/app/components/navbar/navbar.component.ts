import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  redirigirAOtroProyecto() {
    window.location.href = "https://talenthubplatform.vercel.app";
  }
}
