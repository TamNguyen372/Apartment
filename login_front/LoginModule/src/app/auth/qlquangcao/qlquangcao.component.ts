import { Component, OnInit } from '@angular/core';
import { QuangcaoService } from "../../service/qlquangcao/quangcao.service";
@Component({
  selector: 'app-qlquangcao',
  templateUrl: './qlquangcao.component.html',
  styleUrls: ['qlquangcao.component.css']
})
export class QlquangcaoComponent implements OnInit {

  Quangcao: any = [];
  constructor(public crudQuangCao: QuangcaoService) { }

  ngOnInit(): void {
    this.fetchQuangcao();
  }
  fetchQuangcao(){
    return this.crudQuangCao.getQuangCao().subscribe((res:{})=>{
    this.Quangcao = res
  })
}

}
