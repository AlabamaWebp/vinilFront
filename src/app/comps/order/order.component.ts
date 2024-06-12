import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CorsService } from '../../services/cors.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  @Input() tovars: data[] = []
  constructor(private route: ActivatedRoute, private cors: CorsService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(document.getElementById('fieldset'));
    }, 1);
    
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
  soglasie = false;
  next = false;
  goTovar(id: number) {
    this.router.navigate(['catalog', id])
  }
  email = ""
  addres = ""
  tel = ""
  sposob = "Почта России"
  oformit() {
    this.cors.createOrder(this.tovars.map(el => el.id), this.email, this.addres, this.tel, this.sposob).subscribe(el => {
      console.log(el);
      this.router.navigate(['account'])
    })
  }
  changeSposob(d: any) {
    this.sposob = d
  }
}

interface data {
  id: number
  name: string,
  price: number,
  img: string,
}
