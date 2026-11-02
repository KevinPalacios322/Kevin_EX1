import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

interface libro {
  id: number;
  titulo: string;
  autor: string;
}
@Component({
  imports: [],
  selector: 'app-libro',
  styleUrl: './libro.css',
  templateUrl: './libro.html',
})
export class Libro implements OnInit {

  id: number = 0;
  titulo: string = ''
  autor: string = '';
  libros: libro[] = []


  constructor(private router: Router) {}



  ngOnInit() {
    
    this.libros.push({id: 1, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry'});

    

    localStorage.setItem('Libros', JSON.stringify(this.libros));
    this.libros = JSON.parse( localStorage.getItem('Libros') || '[]');


    if (localStorage.getItem('SesionIniciada') !== 'true') {
      this.router.navigate(['']);
    }

  }

  
  CerrarSesion() {
    localStorage.setItem('SesionIniciada', 'false');
    window.location.reload();
  }


}
