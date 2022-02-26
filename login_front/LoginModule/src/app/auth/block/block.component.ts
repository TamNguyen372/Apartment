import { Component, OnInit } from '@angular/core';
import { BlockService } from "../../service/block/block.service";
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  block: any = [];
  constructor(public crudblock: BlockService) { }

  ngOnInit(): void {
    this.fetchblock();
  }
  fetchblock(){
    return this.crudblock.getblock().subscribe((res:{})=>{
    this.block = res
  })
}
}
