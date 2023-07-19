import { Component } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
   public practice:any = [];
  
  constructor(private practiceservice: PracticeService){
    this.practiceservice.getpractice().subscribe(
      (data:any)=>{
        this.practice = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
}
