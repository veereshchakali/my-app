import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  });

  public id: any = "";

  constructor(private vehicleservice: VehicleService, private activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        vehicleservice.getVehicle(this.id).subscribe(
          (data: any) => {
            this.vehicleForm.patchValue(data);
          }
        )

      }
    )
  }


  submit() {
    console.log(this.vehicleForm);
    if (this.id?.length > 0) {
      // update
      this.vehicleservice.updateVehicle(this.id, this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("vehicle updated succesfully");
        },
        (err: any) => {
          alert("vehicle cretion failed");
        }
      )

    }
    else {
      // create
      this.vehicleservice.createVehicle(this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("vehicle created succesfully");
        },
        (err: any) => {
          alert("vehicle cretion failed");
        }
      )

    }
  }


}
