import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Request } from '../interface/request';
import decode from 'jwt-decode';
import { AuthService } from '../service/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private AuthServiceS: AuthService, private RouterS: Router) {}
  canActivate(): boolean {
        // this will be passed from the route config
    // on the data property
    // const expectedRole = route.data.expectedRole;
    // const token = localStorage.getItem('token');
    // decode the token to get its payload
    // const tokenPayload = decode(token);
    this.AuthServiceS.getProfile().subscribe((response: Request) => {
      if (response.status === 200) {
        return true;
      } else {
        this.RouterS.navigate(['/admin']);
        return false;
      }
    });

    return true;
  }
}