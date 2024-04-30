import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PosibleUsuario } from './Entities/posibleUsuario';

@Injectable({
  providedIn: 'root'
})
export class RegistrarTarjetaService {

  constructor(private http: HttpClient) { }

  registrarTarjetaConPersona(posibleUsuario: PosibleUsuario): Observable<any> {
    const url = 'https://canelaaccounmanagermicroservice-qa.up.railway.app/payment/card';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(url, posibleUsuario, { headers });
  }
}
