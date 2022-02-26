import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Taikhoan} from '../../models/taikhoan.model';
import {apiTaikhoan} from '../../../environments/environment';
import { Router } from '@angular/router';

// const httpOptions ={
//   headers:new HttpHeaders({'Content-Type':'Application/json'})
// }

@Injectable({
  providedIn: 'root'
})
export class GetalltaikhoanService {

  constructor(private httpClient:HttpClient, private RouterS: Router) { }
  // setLocalStorage(request) {
  //   return (
  //     request.hasOwnProperty('token') &&
  //     localStorage.setItem('Token', request.token)
  //   );
  // }

  getAll():Observable<Taikhoan[]>{
    return this.httpClient.get<Taikhoan[]>(apiTaikhoan).pipe();
  }
  // get(id: any): Observable<Taikhoan> {
  //   return this.httpClient.get(`${apiTaikhoan}/${id}`);
  // }

  create(data: any): Observable<any> {
    return this.httpClient.post(apiTaikhoan, data).pipe();
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${apiTaikhoan}/${id}`, data).pipe();
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${apiTaikhoan}/${id}`).pipe();
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(apiTaikhoan).pipe();
  }

  // findByTitle(title: any): Observable<Taikhoan[]> {
  //   return this.httpClient.get<Taikhoan[]>(`${apiTaikhoan}?title=${title}`);
  // }
}
