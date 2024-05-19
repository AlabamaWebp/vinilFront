import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorsService } from '../../services/cors.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  @Input() tovars: data[] = []
  constructor(private route: ActivatedRoute, private cors: CorsService) {}

  ngOnInit() {
    if (!this.tovars.length) {
      const id = this.route.snapshot.queryParams['id']
      if (id) {
        this.cors.getProductById(+id).subscribe(el => {
          // el.img = el.images[0]
          this.tovars = [el]
        })
      }
    }
  }
  // tovars: data[] = [];
  next = false;
}

interface data {
  id: number
  name: string,
  price: number,
  img: string,
}
