import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

public vehicles:any = [];

public term:string = "";

public column:string = "";
public order:string = "";
public limit:string = "";
public page:string = "";

constructor(private VehicleService: VehicleService) {

  this.VehicleService.getVehicles().subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
  getfilterVehicles(){
    this.VehicleService.getfilterVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  getsortedvehicles(){
    this.VehicleService.getsortedvehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
      alert("internal server error")

      }

    )
  }
    getpagedvehicles(){
      this.VehicleService.getpagedvehicles(this.limit,this.page).subscribe(
        (data:any)=>{
          this.vehicles=data;
        },
        (err:any)=>{
          alert("intrnal server error");
        }
      )
    }
     
   deletevehicles(id:any){
    this.VehicleService.deletevehicles(id).subscribe(
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
