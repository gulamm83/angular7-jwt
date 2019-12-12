import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee {
 
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 /*public tokenStr: string;*/
 
  constructor(
    
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    let storedToken:string = localStorage.getItem('token');
   /*const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + storedToken });*/
   var headers_obj = new HttpHeaders().set("Authorization", "Bearer " + storedToken).set("Content-Type","application/json").set("Access-Control-Allow-Origin","*");
   const httpOptions = {
          headers: headers_obj
        };
   debugger;
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees',httpOptions);
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }
}