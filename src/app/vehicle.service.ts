import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient:HttpClient) { }
  getVehicles():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  getfilterVehicles(term:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getsortedvehicles(column:any,order:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }
  getpagedvehicles(limit:any,page:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
  }

  createVehicle(data:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }

  deletevehicles(id:any):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }
}
