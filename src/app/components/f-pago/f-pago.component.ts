import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-f-pago',
  templateUrl: './f-pago.component.html',
  styleUrls: ['./f-pago.component.css']
})
export class FPagoComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';

  constructor(private http: HttpClient) { }

  
  enviarDatos(nombre: string, apellido: string, email: string) {
    
    const url = 'URL_DEL_ENDPOINT';

    const datos = {
      nombre: nombre,
      apellido: apellido,
      email: email
    };

    return this.http.post(url, datos);
  }

  onSubmit() {
    this.enviarDatos(this.nombre, this.apellido, this.email).subscribe(
      (response) => {
        console.log('Datos enviados con éxito:', response);
      },
      (error) => {
        console.error('Error al enviar los datos:', error);
      }
    );
  }
}
