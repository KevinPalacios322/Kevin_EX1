import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  IniciarSesion() {
    if (this.usuario === 'admin' && this.clave === '123') {
      localStorage.setItem('SesionIniciada', 'true');
      this.router.navigate(['/libro']);
    } else {
      alert('Usuario o clave incorrectos');
    }



  }

}
