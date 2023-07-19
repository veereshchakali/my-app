import { Component } from '@angular/core';
import { StusentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  public students:any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public limit:string = "";
  public page:string = "";
   
  constructor(private studentservice: StusentService){
    this.studentservice.getstudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  getfilterstudents(){
    this.studentservice.getfilterstudents(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

 getsortedstudents(){
  this.studentservice.getsortedstudents(this.column,this.order).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
 }

 getpagedstudents(){
   this.studentservice.getpagedstudents(this.limit,this.page).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
 }
  deletestudents(id:any){
    this.studentservice.deletestudents(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
