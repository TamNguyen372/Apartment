import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Taikhoan {
  IdTK: number;
  TenTaiKhoan: string;
  MatKhau: string;
  IdVaiTro: number;
  Email: string;
  SoDienThoai: string;
  NgayDangKy: Date;
  MaKhu: string;
}
@Injectable({
  providedIn: 'root'
})
export class TaikhoanService {

  //Rest API
  endpoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  getTaikhoan(): Observable<Taikhoan>{
    return this.httpClient.get<Taikhoan>(this.endpoint + '/taikhoan?page=1&limit=100')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getOneTaikhoan(id): Observable<Taikhoan> {
    return this.httpClient.get<Taikhoan>(this.endpoint + '/taikhoan/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addTaikhoan(data): Observable<Taikhoan> {
    return this.httpClient.post<Taikhoan>(this.endpoint + '/taikhoan', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  updateTaikhoan(id, data): Observable<Taikhoan> {
    return this.httpClient.put<Taikhoan>(this.endpoint + '/taikhoan/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteTaikhoan(id){
    return this.httpClient.delete<Taikhoan>(this.endpoint + '/taikhoan/' + id, this.httpHeader)
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
