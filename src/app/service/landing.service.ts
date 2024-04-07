import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormInfo} from "../model/form-info";


@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  sendFormInfo(info: FormInfo) : Observable<FormInfo>{
    return this.http.post<FormInfo>("http://localhost:8080/form/send",info,this.httpOptions)
  }
}
