import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  
  public activity:any = {};

  constructor(private acivityservice: ActivityService){
    this.acivityservice.getactivity().subscribe(
     (data:any)=>{
      this.activity=data;
     },
     (err:any)=>{
      alert("internal server error");
     } 
    )
  }

  reload(){

    this.acivityservice.getactivity().subscribe(
      (data:any)=>{
       this.activity=data;
      },
      (err:any)=>{
       alert("internal server error");
      } 
     )

  }

}
