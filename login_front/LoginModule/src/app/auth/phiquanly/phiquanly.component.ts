import { Component, OnInit } from '@angular/core';
import { PhiquanlyService } from "../../service/phiquanly/phiquanly.service";
@Component({
  selector: 'app-phiquanly',
  templateUrl: './phiquanly.component.html',
  styleUrls: ['./phiquanly.component.css']
})
export class PhiquanlyComponent implements OnInit {

  phiquanly: any = [];
  constructor(public crudphiquanly: PhiquanlyService) { }

  ngOnInit(): void {
    this.fetchphiquanly();
  }
  fetchphiquanly(){
    return this.crudphiquanly.getphiquanly().subscribe((res:{})=>{
    this.phiquanly = res
  })
}

}
