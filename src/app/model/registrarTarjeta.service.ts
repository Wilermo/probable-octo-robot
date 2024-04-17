import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PosibleUsuario } from './Entities/posibleUsuario'; // Asegúrate de importar PosibleUsuario

@Injectable({
  providedIn: 'root'
})
export class RegistrarTarjetaService {
  
  constructor(private http: HttpClient) { }

  registrarTarjetaConPersona(posibleUsuario: PosibleUsuario): Observable<any> { // Cambia el tipo de retorno a Observable<any>
    const url = `${environment.cardURL}`;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(url, posibleUsuario, { headers }); // Envía posibleUsuario directamente
  }
}
