import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent {

  public length:number = 0;
  public breadth:number = 0;
  public result:number = 0;

  Area(){
    this.result = this.length * this.breadth
  }
   
  Perimeter(){
      this.result = 2 *(this.length + this.breadth)

  }
}
