import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public cartCount:number = 0;

  constructor(private commonService: CommonService){

    commonService.getValue().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )
  }

  
}
