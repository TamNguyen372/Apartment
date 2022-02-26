import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiTaikhoan } from '../../environments/environment';
import { Request } from '../interface/request';
import { map, catchError, tap,retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private Http: HttpClient, private RouterS: Router) {}
  endpoint = 'http://localhost:3000';
  setLocalStorage(request) {
    return (
      request.hasOwnProperty('token') &&
      localStorage.setItem('Token', request.token)
    );
  }

  logIn(data) {
    return this.Http.post<Request>(apiTaikhoan + 'login', data).pipe(
      tap((res) => {
        this.setLocalStorage(res);
        this.RouterS.navigate(['/admin']);
      }),
      catchError((err) => {
        const { error } = err;

        return new Observable((res) => {
          let reqData = {};

          if (err.status === 401) {
            reqData = {
              message: error.message,
              status: error.status,
              token: error.token,
            };
          } else {
            reqData = {
              message: err.statusText,
              status: err.status,
              token: '',
            };
          }
          res.next(reqData);
        });
      })
    );
  }

  registerUser(data) {
    return this.Http.post(apiTaikhoan + 'register', data).pipe(
      catchError((err) => {
        const { error } = err;

        return new Observable((res) => {
          let reqData = {};

          if (err.status === 401) {
            reqData = {
              message: error.message,
              status: error.status,
            };
          } else {
            reqData = {
              message: err.statusText,
              status: err.status,
            };
          }
          res.next(reqData);
        });
      })
    );
  }
  getTaikhoan(): Observable<Request>{
    return this.Http.get<Request>(this.endpoint + '/taikhoan?page=1&limit=100')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }
  getProfile() {
    const token = localStorage.getItem('Token');
    return this.Http.get(apiTaikhoan + 'profile', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    }).pipe(
      catchError((err) => {
        return new Observable((res) => {
          const reqData = {
            message: err.statusText,
            status: err.status,
          };
          res.next(reqData);
        });
      })
    );
  }
  processError(err) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }
}