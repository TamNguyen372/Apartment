import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, AbstractFormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
  <div class="form-group" [formGroup]='formGroup'>
    <label for="controlName" [class]='labelClass'>{{label}}</label>
    <input [type]="type" class="input-form" [formControlName]="controlName">
    <div *ngIf="controller.invalid&&controller.touched">
      <small *ngIf="controller.errors?.required" class="text-danger" id="err_1">*</small>
      <small *ngIf="controller.errors?.minlength" class="text-danger">{{errorMgs2}}</small>
      <small *ngIf="controller.errors?.maxlength" class="text-danger">{{errorMgs3}}</small>
		</div>
  </div>
  `,
  styles: [
  ]
})
export class InputComponent implements OnInit {

  constructor() {}

  @Input() type: string ;
  @Input() className: string;
  @Input() controller: AbstractControl;
  @Input() controlName: string;
  @Input() formGroup: AbstractFormGroupDirective;
  @Input() label: string ;
  @Input() errorMgs1: string ;
  @Input() errorMgs2: string ;
  @Input() labelClass: string ;

  ngOnInit(): void {
   console.log('formGroup', this.formGroup);
  }
}