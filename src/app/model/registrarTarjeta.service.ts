import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
import { PosibleUsuario } from './Entities/posibleUsuario';
=======
>>>>>>> 1d8a5bf77a5462a6950a24b301a03fda9cd21e26

@Injectable({
  providedIn: 'root'
})
export class RegistrarTarjetaService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  registrarTarjetaConPersona(posibleUsuario: PosibleUsuario): Observable<any> {
    const url = 'https://canelaaccounmanagermicroservice-qa.up.railway.app/payment/card';

=======
  registrarTarjeta(): Observable<any> { 
    const url = `${environment.cardURL}`;
    
>>>>>>> 1d8a5bf77a5462a6950a24b301a03fda9cd21e26
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

<<<<<<< HEAD
    return this.http.post<any>(url, posibleUsuario, { headers });
=======
    return this.http.post<any>(url, { headers }); 
>>>>>>> 1d8a5bf77a5462a6950a24b301a03fda9cd21e26
  }
}
