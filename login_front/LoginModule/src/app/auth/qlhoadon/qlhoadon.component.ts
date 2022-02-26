import { Component, OnInit } from '@angular/core';
import { QlhoadonService } from "../../service/qlhoadon/qlhoadon.service";
@Component({
  selector: 'app-qlhoadon',
  templateUrl: './qlhoadon.component.html',
  styleUrls: ['qlhoadon.component.css'
  ]
})
export class QlhoadonComponent implements OnInit {

  qlhoadon: any = [];
  constructor(public crudhoadon: QlhoadonService) { }

  ngOnInit(): void {
    this.fetchqlhoadon();
  }
  fetchqlhoadon(){
    return this.crudhoadon.getqlhoadon().subscribe((res:{})=>{
    this.qlhoadon = res
  })
}

}
