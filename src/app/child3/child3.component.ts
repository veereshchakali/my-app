import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {
@Input() public num1: number = 0;
@Input() public num2: number = 0;

@Input() public result:any = [];

@Output() public eventEmitter:EventEmitter<any> = new EventEmitter();

sum(){
  this.eventEmitter.emit(this.num1+this.num2);
 }
 sub(){
  this.eventEmitter.emit(this.num1-this.num2);
 }
 mul(){
  this.eventEmitter.emit(this.num1*this.num2);
 }
 div (){
  this.eventEmitter.emit(this.num1/this.num2);
 }

}
