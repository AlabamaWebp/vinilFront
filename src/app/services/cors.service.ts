import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  private apiUrl = 'http://localhost:3000'; // Замените на адрес вашего Nest.js API
  login = '1'

  constructor(private http: HttpClient) { }
  getProducts(sort: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/database/products/${this.login}/${sort}`).pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/database/products/${this.login}/${id}`).pipe(catchError(this.handleError));
  }

  getOrderByStatus(status: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/database/getOrderByStatus/${this.login}/${status}`).pipe(catchError(this.handleError));
  }

  createOrderByStatus(data: { status: number, id: number }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/database/createOrderByStatus/`, { login: this.login, status: data.status, id: data.id }).pipe(catchError(this.handleError));
  }

  deleteOrderByStatus(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/database/deleteOrderByStatus/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return error;
  }
}

