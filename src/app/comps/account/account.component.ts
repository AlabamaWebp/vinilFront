import { Component } from '@angular/core';
import { CorsService } from '../../services/cors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  constructor(private cors: CorsService, private router: Router) {}
  user: user | undefined;
  ngOnInit() {
    this.cors.getUser().subscribe(el => {
      this.user = el;
      console.log(this.user);
    });
    this.cors.getOrder().subscribe(el => {
      console.log(el);
      this.orders = el;
    })
  }
  logout() {
    this.cors.setLogin = undefined
    this.router.navigate(['']);
  }


  orders: order[] | undefined
  goTovar(id: number) {
    this.router.navigate(['catalog', id])
  }
}
interface user {
  login: string;
  fio: string;
  tel: string;
  country: string;
  city: string;
}
interface order {
  id: number,
  product: product[]
}
interface product {
  id: number
  name: string,
  img: string,
  price: number,
}