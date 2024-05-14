import { Component } from '@angular/core';
import { CorsService } from '../../services/cors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  constructor(private cors: CorsService, private router: Router) { }
  ngOnInit() {
    this.refreshCatalog();
  }
  refreshCatalog() {
    this.cors.getOrderByStatus(0).subscribe(el => {
      console.log(el);
      this.catalog = el
      .map((e: any) => {
        e.img = e.images[0].img;
        return e;
      })
    })
  }
  catalog: any[] = []
  go(str: number) {
    this.router.navigate(["catalog/"+str]);
  }
}
