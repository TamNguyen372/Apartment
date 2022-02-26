import { Component, OnInit } from '@angular/core';
import { QlchiphiService } from "../../service/qlchiphi/qlchiphi.service";

@Component({
  selector: 'app-qlchiphi',
  templateUrl: './qlchiphi.component.html',
  styleUrls: ['qlchiphi.component.css'
  ]
})
export class QlchiphiComponent implements OnInit {

  qlchiphi: any = [];
  constructor(public crudchiphi: QlchiphiService) { }

  ngOnInit(): void {
    this.fetchqlchiphi();
  }
  fetchqlchiphi(){
    return this.crudchiphi.getqlhchiphi().subscribe((res:{})=>{
    this.qlchiphi = res
  })
}

}
