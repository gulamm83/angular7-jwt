import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

   register(username, password,email,phone) {
     debugger;
      return this.httpClient.post<any>('http://localhost:8080/register',{username,password,email,phone}).pipe(
       map(
         userData => {
           debugger;
          return userData;
         }
       )
  
      );
    }


}