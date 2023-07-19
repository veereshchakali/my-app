import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  public accountForm: FormGroup = new FormGroup({
    accountForm: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city           : new FormControl(),
    profie_picture : new FormControl(),
    id             : new FormControl() 
  });

  constructor(private bankservice: BankserviceService){}

  submit(){
    console.log (this.accountForm);
    this.bankservice.createaccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert(" account created succesfully");
      },
      (err:any)=>{
        alert("account creation failed");
      }
    )

  }

}
