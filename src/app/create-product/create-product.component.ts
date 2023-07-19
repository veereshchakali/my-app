import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  public productForm:FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    color: new FormControl(),
    features: new FormGroup({
    ram: new FormControl(),
    battery: new FormControl(),
    processor: new FormControl()
    }),
    payment: new FormControl(),
    upiaddress: new FormControl(),
    netbanking: new FormControl(),
    comments: new FormArray([])
  });
  get commentsFormArray(){
    return this.productForm.get('comments') as FormArray;
    }
    
    addcomments(){
      this.commentsFormArray.push(
        new FormGroup({
          name: new FormControl(),
          time: new FormControl(),
          messege: new FormControl()
        })
      )
    }
    delete(i:number){
     this.commentsFormArray.removeAt(i);
      
    }

  submit(){
    console.log(this.productForm);
  }
  
}
