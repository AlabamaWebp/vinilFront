import { Component } from '@angular/core';
import { CorsService } from '../../services/cors.service';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [OrderComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  tovars: any[] | undefined;
  load = false;
  constructor(private cors: CorsService) {}
  ngOnInit() {
    this.load = true;
    this.cors.getOrderByStatus(1).subscribe(el => {
      this.tovars = el;
      this.load = false;
    })
  }
}
