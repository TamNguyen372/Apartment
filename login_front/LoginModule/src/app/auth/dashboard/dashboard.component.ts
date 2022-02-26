import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
//trang con
@Component({
  selector: 'app-dashboard',
  templateUrl: 'ql-taikhoan.component.html' ,
  styleUrls: ['ql-taikhoan.component.css'],
})
export class DashboardComponent implements OnInit {
  Taikhoan: any = [];
  constructor(public crudTaikhoan: AuthService) {}

  ngOnInit(): void {
    this.fetchTaikhoan();
  }
  fetchTaikhoan(){
      return this.crudTaikhoan.getTaikhoan().subscribe((res:{})=>{
      this.Taikhoan = res
    })
  }
  // delete(id){
  //   if (window.confirm('Really?')){
  //     this.crudTaikhoan.deleteTaikhoan(id).subscribe(res =>{
  //       this.fetchTaikhoan()
  //     })
  //   }
  // }
}