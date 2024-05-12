import { Component } from '@angular/core';
import { CorsService } from '../../services/cors.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [HttpClientModule],
  providers: [HttpClientModule],
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
    this.refreshCatalog();
  }
  constructor(private cors: CorsService) { }
  ngOnInit() {
    this.refreshCatalog();
  }
  refreshCatalog() {
    this.cors.getProducts(this.current_nav.name).subscribe(el => {
      this.catalog = el.map(e => {
        e.img = e.images[0].img;
        return e;
      })
    })
  }
  catalog: catalog_item[] = []
}

interface nav_item {
  name: string, icon: string
}
interface catalog_item {
  name: string,
  img: string,
  hover: string
}
