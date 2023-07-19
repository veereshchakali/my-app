import { Component } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.scss']
})
export class BankaccountsComponent {

  public accounts:any = [];

  public term:string = "";
  public column:string = "";
  public order:string = "";
  public limit:string = "";
  public page:string = "";

  constructor(private bankservice: BankserviceService ){
    this.bankservice.getaccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  getfilteredaccounts(){
    this.bankservice.getfileteredaccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
      
    )
  
  }

  getsortedaccounts(){
    this.bankservice.getsortedaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  getpagedaccounts(){
    this.bankservice.getpagedaccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal  server error");
      }
    )
  }
  deleteaccount(id:any){
    this.bankservice.deleteaccount(id).subscribe(
      (data:any)=>{
        alert("delete succesfully")
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
}
