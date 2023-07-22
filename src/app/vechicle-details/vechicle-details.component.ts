import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechicle-details',
  templateUrl: './vechicle-details.component.html',
  styleUrls: ['./vechicle-details.component.scss']
})
export class VechicleDetailsComponent {

  public id:any = "";
  public vehicle:any = {};

  constructor(private activatedRoute: ActivatedRoute, private vehicleService: VehicleService){

    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        vehicleService.getVehicle(this.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )
      }
    )
  }

}
