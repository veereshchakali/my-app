import { Component } from '@angular/core';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  public personals:any = [];

  constructor(private personalservice: PersonalService){

    this.personalservice.getpersonal().subscribe(
      (data:any)=>{
        this.personals=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

    }
  }


