import { Component, OnInit } from '@angular/core';
import { LcanhoService } from "../../service/lcanho/lcanho.service";
@Component({
  selector: 'app-lcanho',
  templateUrl: './lcanho.component.html',
  styleUrls: ['./lcanho.component.css']
})
export class LcanhoComponent implements OnInit {

  lcanho: any = [];
  constructor(public crudlcanho: LcanhoService) { }

  ngOnInit(): void {
    this.fetchlcaho();
  }
  fetchlcaho(){
    return this.crudlcanho.getloaicanho().subscribe((res:{})=>{
    this.lcanho = res
  })
}
}
