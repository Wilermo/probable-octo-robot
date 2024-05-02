import { Injectable } from '@angular/core';
import { company } from '../entities/company';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'URL';
  constructor(private http: HttpClient) { }

  
  agregarCompany(company: company): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, company);
  }
  
}
