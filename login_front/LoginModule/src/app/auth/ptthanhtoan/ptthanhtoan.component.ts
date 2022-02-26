import { Component, OnInit } from '@angular/core';
import { PtthanhtoanService } from "../../service/ptthanhtoan/ptthanhtoan.service";
@Component({
  selector: 'app-ptthanhtoan',
  templateUrl: './ptthanhtoan.component.html',
  styleUrls: ['./ptthanhtoan.component.css']
})
export class PtthanhtoanComponent implements OnInit {
  
  ptthanhtoan: any = [];
  constructor(public crudptthanhtoan: PtthanhtoanService) { }

  ngOnInit(): void {
    this.fetchptthanhtoan();
  }
  fetchptthanhtoan(){
    return this.crudptthanhtoan.getptthanhtoan().subscribe((res:{})=>{
    this.ptthanhtoan = res
  })
}

}
