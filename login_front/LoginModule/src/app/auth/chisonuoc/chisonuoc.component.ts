import { Component, OnInit } from '@angular/core';
import { CsnuocService } from "../../service/csnuoc/csnuoc.service";
@Component({
  selector: 'app-chisonuoc',
  templateUrl: './chisonuoc.component.html',
  styleUrls: ['./chisonuoc.component.css']
})
export class ChisonuocComponent implements OnInit {
  
  csnuoc: any = [];
  constructor(public crudcsnuoc: CsnuocService) { }

  ngOnInit(): void {
    this.fetchcsnuoc();
  }
  fetchcsnuoc(){
    return this.crudcsnuoc.getchisonuoc().subscribe((res:{})=>{
    this.csnuoc = res
  })
}
}
