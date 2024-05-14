import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { registration } from '../comps/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  private apiUrl = 'http://localhost:3000'; // Замените на адрес вашего Nest.js API
  private _login: string | undefined = localStorage.getItem("login") ?? undefined

  set setLogin(value: string) {
    this._login = value;
    localStorage.setItem("login", value)
  }
  get login() { return this._login }


  constructor(private http: HttpClient) { }
  getProducts(sort: string): Observable<any[]> {
    let href = `${this.apiUrl}/database/products/${sort}`
    if (this.login) href += '?login=' + this.login
    return this.http.get<any[]>(href).pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<any> {
    let href = `${this.apiUrl}/database/product/${id}`
    if (this.login) href += '?login=' + this.login
    return this.http.get<any>(href).pipe(catchError(this.handleError));
  }

  getOrderByStatus(status: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/database/getOrderByStatus/${this.login}/${status}`).pipe(catchError(this.handleError));
  }

  createOrderByStatus(data: { status: number, id: number }): Observable<any> {
    const data1 = { login: this.login, status: data.status, id: data.id }
    console.log(JSON.stringify(data1));
    return this.http.post<any>(`${this.apiUrl}/database/createOrderByStatus/`, data1).pipe(catchError(this.handleError));
  }

  deleteOrderByStatus(data: { status: number, id: number }): Observable<any> {
    const data1 = { login: this.login, status: data.status, id: data.id }
    console.log(JSON.stringify(data1));
    return this.http.post<any>(`${this.apiUrl}/database/deleteOrderByStatus/`, data1).pipe(catchError(this.handleError));
  }




  createAccount(user: registration): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/noauth/createAccount`, user);
  }

  checkLogin(login: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/noauth/checkLogin/${login}`);
  }

  logIn(login: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/noauth/login/${login}/${password}`);
  }



  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return error;
  }
}

