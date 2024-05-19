import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private activateRoute: ActivatedRoute, private cors: CorsService, private router: Router) {
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params["id"];
    });
    this.refreshProduct();
  }
  refreshProduct() {
    if (this.id) {
      this.is_load = true
      this.cors.getProductById(this.id).subscribe(el => {
        this.is_load = false
        // el.className = el.className.name;
        // el.images = el.images.map((el: any) => el.img);
        console.log(el);
        this.data = el;
        this.selected_image = el.images[0]
        // console.log(this.data);
      }, (e) => this.error = true)
    }

  }

  id: number | undefined;
  data: product | undefined;
  error = false;
  is_load = false;

  selected_image = ""
  selectImage(str: string) {
    this.selected_image = str;
  }

  clickFavorit() {
    if (this.data?.is_favorite != undefined)
      this.is_load = true

    if (this.data?.is_favorite === false) {
      this.cors.createOrderByStatus({ status: 0, id: this.id as number })
        .subscribe(this.func, this.err)
    }
    else {
      this.cors.deleteOrderByStatus({ status: 0, id: this.id as number })
        .subscribe(this.func, this.err)
    }
  }
  clickBascet() {
    if (this.data?.is_favorite != undefined)
      this.is_load = true

    if (this.data?.in_basket === false) {
      this.cors.createOrderByStatus({ status: 1, id: this.id as number })
        .subscribe(this.func, this.err)
    }
    else {
      this.cors.deleteOrderByStatus({ status: 1, id: this.id as number })
        .subscribe(this.func, this.err)
    }
  }
  orderOne() {
    this.router.navigate(['order'], { queryParams: { id: this.id } })
  }
  
  func = (el: any) => {
    console.log(el);
    this.refreshProduct()
  }
  err = (el: any) => {
    console.log(el);
  }
}
interface product {
  name: string,
  images: string[],
  price: number,
  full: string,
  hover: string,
  is_favorite: boolean,
  in_basket: boolean,
  in_order: boolean,
}