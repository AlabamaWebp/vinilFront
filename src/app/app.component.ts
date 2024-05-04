import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  hf = true;
  constructor(router: Router) {
    router.events.subscribe((ev: any) => {
      if (router.url) {
        const url = router.url;
        const tabu = ["login", "signin"]
        if (tabu.includes(url.replace('/','')))
          this.hf = false;
        else this.hf = true;
      }

    })
  }
}
