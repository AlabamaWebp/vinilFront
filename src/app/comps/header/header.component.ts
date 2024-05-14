import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorsService } from '../../services/cors.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, public cors: CorsService) {}
  goLogin() {
    this.router.navigate(["login"]);
  }
  go(str: string) {
    this.router.navigate([str]);
  }
}
