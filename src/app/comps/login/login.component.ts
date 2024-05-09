import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}
  go(str: string = 'home') {
    this.router.navigate([str]);
  }

  is_reg: boolean = false;
  isReg(bool: boolean) {
    this.is_reg = bool;
  }

  login: string = ''
  password: string = ''

  clickLogin() {
    console.log(
      this.login,
      this.password
    );
  }

}
