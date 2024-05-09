import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

  nav: nav_item[] = [
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
  current_nav = this.nav[0];
  selectNav(item: nav_item) {
    this.current_nav = item;
  }
  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.catalog[i] = {
        name: "test",
        img: "test",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima delectus, impedit expedita, at nobis maiores autem a voluptate, doloribus dicta fugiat aliquid consequuntur? Numquam, dolorum est! Atque, molestiae voluptas?",
      }
    }
  }
  catalog: catalog_item[] = [

  ]
}

interface nav_item {
  name: string, icon: string
}
interface catalog_item {
  name: string,
  img: string,
  desc: string
}
