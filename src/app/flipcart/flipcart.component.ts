import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.scss']
})
export class FlipcartComponent {

public products:any = [];

constructor(private Flipcartservice: FlipcartService){
  this.Flipcartservice.getproducts().subscribe(
    (data:any)=>{
      this.products=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}

}
