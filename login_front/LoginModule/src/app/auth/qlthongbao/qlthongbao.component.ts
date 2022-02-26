import { Component, OnInit } from '@angular/core';
import { QlthongbaoService } from "../../service/qlthongbao/qlthongbao.service";

@Component({
  selector: 'app-qlthongbao',
  templateUrl: './qlthongbao.component.html',
  styleUrls: ['./qlthongbao.component.css']
})
export class QlthongbaoComponent implements OnInit {
    qlthongbao: any = [];
    constructor(public crudqlthongbao: QlthongbaoService) { }
    ngOnInit(): void {
      this.fetchthongbao();
    }
    fetchthongbao(){
      return this.crudqlthongbao.getqlthongbao().subscribe((res:{})=>{
      this.qlthongbao = res
    })
  }
  

}

