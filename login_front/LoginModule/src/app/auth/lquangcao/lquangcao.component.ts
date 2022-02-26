import { Component, OnInit } from '@angular/core';
import { LoaiqcService } from "../../service/loaiqc/loaiqc.service";
@Component({
  selector: 'app-lquangcao',
  templateUrl: './lquangcao.component.html',
  styleUrls: ['./lquangcao.component.css']
})
export class LquangcaoComponent implements OnInit {
  Loaiqc: any = [];
  constructor(public crudLoaiqc: LoaiqcService) { }

  ngOnInit(): void {
    this.fetchLoaiqc();
  }
  fetchLoaiqc(){
    return this.crudLoaiqc.getLoaiqc().subscribe((res:{})=>{
    this.Loaiqc = res
  })
}
}