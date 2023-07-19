import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {
public phone:number = 824738814;
public name:string = "john";
public isindian:boolean = true;

public prices:number[] = [100,150,120,400];
public cities:string[] = ['hyd','ban','che'];

public user:any = {
  name:'abc',
  age:20
};

}
