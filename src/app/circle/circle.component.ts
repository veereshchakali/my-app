import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {


  public radius:number = 0;
  public result:number = 0;

  Area(){
    this.result = 3.14*this.radius*this.radius
  }
  Perimeter(){
    this.result = 2*3.14*this.radius
  }
}
