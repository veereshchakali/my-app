import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent {


  public products:any =[
    {name:'pen',price:20,rating:3,freedelivery:true},
    {name:'phone',price:100,rating:2,freedelivery:false},
    {name:'shirt',price:400,rating:4,freedelivery:true},
    {name:'cap',price:200,rating:5,freedelivery:false},
    {name:'mobile case',price:300,rating:2,freedelivery:true},
    {name:'remote',price:400,rating:2.5,freedelivery:false}
    ];
      

    public term:string = '';

    search(){
      this.products = this.products.filter((product:any)=>product.name.includes(this.term));
    }

    free(){
      this.products = this.products.filter((product:any)=>product.freedelivery==true);
    }

    sort1(){
      this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
    }

    sort2(){
      this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
    }

    sort3(){
      this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
    }

    sort4(){
      this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
    }
    
    Map(){
      this.products = this.products.map((product:any)=>{
        product.price=product.price/2
        return product
      })
    }
    delivery(){
      this.products = this.products.map((product:any)=>{
        if(product.freedelivery==false){
          product.price=product.price+50
          return product
        }else{
          return product
        }
      })
    }
    sum(){
       var total =this.products=this.products.reduce((a:number,b:any)=>a+b.price,0)

     alert(total)
    }
    cart(){
     alert  (this.products.length)

    }






    dalete(i:any){
      this.products.splice(i,1);
    }
   }