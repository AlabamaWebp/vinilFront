import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  catalog: {
    name: string,
    img: string,
    ref: string
  }[] = [
      {
        name: 'Классика',
        img: 'classic.jpg',
        ref: 'string',
      },
      {
        name: 'Джаз',
        img: 'djaz.jpg',
        ref: 'string',
      },
      {
        name: 'Рок',
        img: 'rok.jpg',
        ref: 'string',
      },
      {
        name: 'Блюз',
        img: 'bluz.png',
        ref: 'string',
      },
      {
        name: 'Поп',
        img: 'pop.jpg',
        ref: 'string',
      },
    ]
}
