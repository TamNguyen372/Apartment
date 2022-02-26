import { Component, OnInit } from '@angular/core';
import { QlcanhoService } from "../../service/qlcanho/qlcanho.service";
@Component({
  selector: 'app-qlcanho',
  templateUrl: './qlcanho.component.html',
  styleUrls: ['./qlcanho.component.css']
})
export class QlcanhoComponent implements OnInit {
  
  qlcanho: any = [];
  constructor(public crudqlcanho: QlcanhoService) { }

  ngOnInit(): void {
    this.fetchqlcaho();
  }
  fetchqlcaho(){
    return this.crudqlcanho.getqlcanho().subscribe((res:{})=>{
    this.qlcanho = res
  })
}

}
