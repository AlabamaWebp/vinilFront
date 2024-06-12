import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorsService } from '../../services/cors.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router, public cors: CorsService) {}
  go(str: string) {
    this.router.navigate([str]);
  }
}
