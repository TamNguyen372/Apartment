import { Component, OnInit } from '@angular/core';
import { QuanlyxeService } from "../../service/quanlyxe/quanlyxe.service";
@Component({
  selector: 'app-qlxe',
  templateUrl: './qlxe.component.html',
  styleUrls: ['qlxe.component.css'
  ]
})
export class QlxeComponent implements OnInit {

  quanlyxe: any = [];
  constructor(public crudquanlyxe: QuanlyxeService) { }

  ngOnInit(): void {
    this.fetchquanlyxe();
  }
  fetchquanlyxe(){
    return this.crudquanlyxe.getquanlyxe().subscribe((res:{})=>{
    this.quanlyxe = res
  })
}

}
