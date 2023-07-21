import { Component } from '@angular/core';
import { StudentService } from '../student.service';

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
   

  constructor(private studentService: StudentService){
    this.studentService.getstudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  getfilterstudents(){
    this.studentService.getfilterstudents(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

 getsortedstudents(){
  this.studentService.getsortedstudents(this.column,this.order).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
 }

 getpagedstudents(){
   this.studentService.getpagedstudents(this.limit,this.page).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
 }
  deletestudents(id:any){
    this.studentService.deletestudents(id).subscribe(
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
