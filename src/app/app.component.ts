import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';
import { CorsService } from './services/cors.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  hf = true;
  constructor(private router: Router, private cors: CorsService) {
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
  ngOnInit() {
    this.cors.getUser().subscribe(e => {
      if (!e) localStorage.removeItem("login");
      this.router.navigate(["home"])
      // window
    }, err => {
      console.log(err);
    })
  }
}
