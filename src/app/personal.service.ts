import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private httpClient: HttpClient) { }

  getpersonal():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
