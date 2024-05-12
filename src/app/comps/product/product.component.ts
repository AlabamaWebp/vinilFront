import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CorsService } from '../../services/cors.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private activateRoute: ActivatedRoute, private cors: CorsService) {
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params["id"];
      if (this.id)
        this.cors.getProductById(this.id).subscribe(el => {
          el.className = el.className.name
          el.images = el.images.map((el: any) => el.img);

          this.data = el;
          this.selected_image = el.images[0]
          console.log(this.data);
        }, (e) => this.error = true)
    });
  }
  id: number | undefined;
  data: product | undefined;
  error = false;

  selected_image = ""
  selectImage(str: string) {
    this.selected_image = str;
  }

}
interface product {
  name: string,
  images: string[],
  price: number,
  full: string,
  hover: string
}