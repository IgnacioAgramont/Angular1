import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular1';

  maestrias = {
    one: 'Inteligencia Artificial',
    two: 'Ciencia de Datos',
    three: 'Programacion de Videojuegos',
    four: 'Big Data',
  };

  horarios = {
    one: '17:00 - 19:30',
    two: '14:00 - 17:00',
    three: '17:30 - 20:00',
    four: '10:00 - 12:30',
  };

  precio = {
    one: '200$',
    two: '250$',
    three: '150$',
    four: '200$',
  };
}
