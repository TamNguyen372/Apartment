import { Component, OnInit } from '@angular/core';
import { PhixeService } from "../../service/phixe/phixe.service";
@Component({
  selector: 'app-phixe',
  templateUrl: './phixe.component.html',
  styleUrls: ['./phixe.component.css']
})
export class PhixeComponent implements OnInit {

  phixe: any = [];
  constructor(public crudphixe: PhixeService) { }

  ngOnInit(): void {
    this.fetchqlphixe();
  }
  fetchqlphixe(){
    return this.crudphixe.getphixe().subscribe((res:{})=>{
    this.phixe = res
  })
}

}
