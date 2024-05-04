import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: string = ''
  password: string = ''

  clickLogin() {
    console.log(
      this.login,
      this.password
    );
  }
}
