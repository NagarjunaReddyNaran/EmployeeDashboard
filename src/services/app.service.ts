import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departments } from 'src/models/department';
import { Employees } from 'src/models/employee';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_URL = 'https://209.217.95.19:18100';
  constructor(private http: HttpClient) {}


  public getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>('assets/employees.json');
  }

  public getDepartments(): Observable<Departments[]> {
    return this.http.
    get<Departments[]>('assets/departments.json');
  }

  public getEmployeesApi(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/v2/employees');
  }

  public getDepartmentsApi(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/v2/departments');
  }
}
