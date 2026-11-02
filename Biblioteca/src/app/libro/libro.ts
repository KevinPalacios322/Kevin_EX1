import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-libro',
  styleUrl: './libro.css',
  templateUrl: './libro.html',
})
export class Libro implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    
    if (localStorage.getItem('SesionIniciada') !== 'true') {
      this.router.navigate(['']);
    }
  }

  
  CerrarSesion() {
    localStorage.setItem('SesionIniciada', 'false');
    window.location.reload();
  }


}
