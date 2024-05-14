import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorsService } from '../../services/cors.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private cors: CorsService) { }
  go(str: string = 'home') {
    this.router.navigate([str]);
  }

  is_reg: boolean = false;
  isReg(bool: boolean) {
    this.is_reg = bool;
  }
  clickLogin() {
    if (!this.is_reg) {
      const inlog = ["login", "password",];
      const tmp: any = {}
      inlog.forEach(el => tmp[el] = (document.getElementById(el) as HTMLInputElement).value);

      if (inlog.some(el => !tmp[el]))
        return
      this.cors.logIn(tmp.login, tmp.password).subscribe(el => this.getLogin(el, tmp.login))
    }
    else {
      const reg = ['fio', 'tel', 'country', 'city', 'login1', 'pass', 'pass2',]
      const tmp: any = {}
      reg.forEach(el => tmp[el] = (document.getElementById(el) as HTMLInputElement).value);
      if (reg.some(el => !tmp[el]))
        return
      this.cors.createAccount({
        login: tmp.login1,
        fio: tmp.fio,
        password: tmp.pass,
        tel: tmp.tel,
        country: tmp.country,
        city: tmp.city
      }).subscribe(el => this.getLogin(el, tmp.login1))
    }
  }

  pass_error = false;
  checkPassword() {
    this.pass_error = !((document.getElementById('pass') as HTMLInputElement).value == (document.getElementById('pass2') as HTMLInputElement).value)
  }
  login_error = false;
  checkLogin() {
    const login = (document.getElementById('login') as HTMLInputElement).value
    if (!!login)
      this.cors.checkLogin(login).subscribe(el => {
        this.login_error = el
        if (!el) { alert("Такой логин уже существует") }
      });
  }
  blockButton() {
    return this.login_error || this.pass_error
  }
  getLogin(i: boolean, str: string) {
    if (i) {
      this.cors.setLogin = str;
      this.go()
    }
  }
}
export interface registration {
  login: string;
  password: string;
  fio: string;
  tel: string;
  country: string;
  city: string;
}