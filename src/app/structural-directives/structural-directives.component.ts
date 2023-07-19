import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {

public names:string[] = ['Ajay','Bharath','virat'];
public states:string[] = ['Ap','Ts','Tamilnadu','Kerala'];

public products:any = [
  {name:'pen',price:20},
  {name:'mobile',price:13000},
  {name:'watch',price:5000}
] 

public users:any = [
  {name:'a',phone:'9494',class:'10',Marks:'100'},
  {name:'b',phone:'8500',class:'8',Marks:'80'},
  {name:'c',phone:'9391',class:'9',Marks:'90'}
];

public num:number = 0;

}
