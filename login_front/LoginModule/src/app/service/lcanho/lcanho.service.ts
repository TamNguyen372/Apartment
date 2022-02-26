import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap,retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LcanhoService {
  endpoint = 'http://localhost:3000';
  constructor(private Http: HttpClient, private RouterS: Router) { }
  setLocalStorage(request) {
    return (
      request.hasOwnProperty('token') &&
      localStorage.setItem('Token', request.token)
    );
  }
  getloaicanho(): Observable<Request>{
    return this.Http.get<Request>(this.endpoint + '/loaicanho')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
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
