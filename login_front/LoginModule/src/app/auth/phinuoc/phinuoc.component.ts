import { Component, OnInit } from '@angular/core';
import { PhinuocService } from "../../service/phinuoc/phinuoc.service";
@Component({
  selector: 'app-phinuoc',
  templateUrl: './phinuoc.component.html',
  styleUrls: ['./phinuoc.component.css']
})
export class PhinuocComponent implements OnInit {

  phinuoc: any = [];
  constructor(public crudphinuoc: PhinuocService) { }

  ngOnInit(): void {
    this.fetchphinuoc();
  }
  fetchphinuoc(){
    return this.crudphinuoc.getphinuoc().subscribe((res:{})=>{
    this.phinuoc = res
  })
}

}
