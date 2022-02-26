import { Component, OnInit } from '@angular/core';
import { ChungcuService } from "../../service/qlchungcu/chungcu.service";
@Component({
  selector: 'app-qlchungcu',
  templateUrl: './qlchungcu.component.html',
  styleUrls: [ 'qlchungcu.component.css']
})
export class QlchungcuComponent implements OnInit {
  Chungcu: any = [];
  constructor(public crudChungcu: ChungcuService) { }

  ngOnInit(): void {
    this.fetchChungcu();
  }
  fetchChungcu(){
    return this.crudChungcu.getChungcu().subscribe((res:{})=>{
    this.Chungcu = res
  })
}

}
