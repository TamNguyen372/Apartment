import { Component, OnInit } from '@angular/core';
import { LthongbaoService } from "../../service/lthongbao/lthongbao.service";

@Component({
  selector: 'app-lthongbao',
  templateUrl: './lthongbao.component.html',
  styleUrls: ['./lthongbao.component.css']
})
export class LthongbaoComponent implements OnInit {

  Loaithonbao: any = [];
  constructor(public crudLthongbao: LthongbaoService) { }

  ngOnInit(): void {
    this.fetchLthongbao();
  }
  fetchLthongbao(){
    return this.crudLthongbao.getlthongbao().subscribe((res:{})=>{
    this.Loaithonbao = res
  })
}

}
