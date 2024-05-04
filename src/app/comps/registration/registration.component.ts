import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  login: string = ''
  password: string = ''

  clickLogin() {
    console.log(
      this.login,
      this.password
    );
  }
}
