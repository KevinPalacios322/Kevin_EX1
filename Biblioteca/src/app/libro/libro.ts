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
  imports: [FormsModule],
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

    this.libros = JSON.parse(localStorage.getItem('Libros') || '[]');
    


    if (localStorage.getItem('SesionIniciada') !== 'true') {
      this.router.navigate(['']);
    }

  }

  InsertarLibro() {
    if (this.titulo.trim() === '' || this.autor.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
    let UltimoId = 0;
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].id > UltimoId) {
        UltimoId = this.libros[i].id;
      }
    }
    const nuevoLibro: libro = {
      id: UltimoId + 1,
      titulo: this.titulo,
      autor: this.autor
    };
    this.libros.push(nuevoLibro);
    localStorage.setItem('Libros', JSON.stringify(this.libros));
  }

  CerrarSesion() {
    localStorage.setItem('SesionIniciada', 'false');
    window.location.reload();
  }


}
