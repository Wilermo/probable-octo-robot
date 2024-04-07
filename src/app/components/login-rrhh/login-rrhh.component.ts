import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-rrhh',
  templateUrl: './login-rrhh.component.html',
  styleUrls: ['./login-rrhh.component.css']
})
export class LoginRRHHComponent {
  constructor( private router: Router) {}
  user = {
    email: '',
    password: ''
  };

  login(): void {
    //this.authService.login(this.nombres,this.contrasenia).subscribe((response: any) => {
    //  console.log(localStorage.getItem('user'))
    //  this.sharedDataService.setTexto(this.nombres);
      this.router.navigate(['/dashboardhr'])
    //}, (error: any) => {
    //  console.error(error);
    //});
  }
}
