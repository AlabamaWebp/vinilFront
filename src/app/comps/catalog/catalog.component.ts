import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

  catalog_nav: {name: string, icon: string}[] = [
    {
      name: "Классика", 
      icon: "Ikonka_klassika.png"
    },
    {
      name: "Рок", 
      icon: "Ikonka_rok.png"
    },
    {
      name: "Джаз", 
      icon: "ikonka_dzhaz.png"
    },
    {
      name: "Поп", 
      icon: "Ikonka_pop.png"
    },
    {
      name: "Блюз", 
      icon: "ikonka_blyuz.png"
    },
  ]
  current_nav = this.catalog_nav[0];

}
