import { Component, OnInit } from '@angular/core';
import { MucdoService } from "../../service/mucdo/mucdo.service";
@Component({
  selector: 'app-mucdo',
  templateUrl: './mucdo.component.html',
  styleUrls: ['./mucdo.component.css']
})
export class MucdoComponent implements OnInit {

  mucdo: any = [];
  constructor(public crudmucdo: MucdoService) { }

  ngOnInit(): void {
    this.fetchmucdo();
  }
  fetchmucdo(){
    return this.crudmucdo.getmucdo().subscribe((res:{})=>{
    this.mucdo = res
  })
}

}
