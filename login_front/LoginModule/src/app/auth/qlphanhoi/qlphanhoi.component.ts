import { Component, OnInit } from '@angular/core';
import {QlphanhoiService } from "../../service/qlphanhoi/qlphanhoi.service";
@Component({
  selector: 'app-qlphanhoi',
  templateUrl: './qlphanhoi.component.html',
  styleUrls: ['./qlphanhoi.component.css']
})
export class QlphanhoiComponent implements OnInit {
  Qlphanhoi: any = [];
  constructor(public crudQlphanhoi: QlphanhoiService) { }

  ngOnInit(): void {
    this.fetchQlphanhoi();
  }
  fetchQlphanhoi(){
    return this.crudQlphanhoi.getQLphanhoi().subscribe((res:{})=>{
    this.Qlphanhoi = res
  })
}
}
