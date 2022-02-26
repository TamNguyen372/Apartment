import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Request } from '../../interface/request';
declare var $:any;

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})

export class LoginformComponent implements OnInit, AfterViewInit{
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private routerS: Router
  ) {}

  loginForm = new FormGroup({
    TenTaiKhoan: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    MatKhau: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16)
    ]),
  });

  ngOnInit(): void {}
  showValue() {
    console.log(this.loginForm);
  }

  handleSubmit() {
    this.authService.logIn(this.loginForm.value).subscribe((res: Request) => {
      this.toastr.success(res.message);
    });
  }
  ngAfterViewInit():void{
    this.readjs();
  }
  readjs(){
   $('inputshow-hide-password > app-input > input').even().removeClass('form-control');
  }
  

}