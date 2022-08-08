import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/models/department';
import { Employees } from 'src/models/employee';
import { AppService } from './app.service';
import { EmpFilterPipe } from './emp-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  employees:Employees[] = [];
  employeesCopy:Employees[] = [];
  departments:Departments[]  = [];
  departmentName: string = "All Departments";

  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor(private api: AppService, private empFilterPipe: EmpFilterPipe) {}

  ngOnInit() {
    this. getDepartments();
    // this.getEmployeesApi();
  }

  getEmployees(){
    this.api.getEmployees().subscribe(
      (res: Employees[]) => {
        this.employees = res;
        this.employeesCopy = res;
        this.collectionSize = this.employeesCopy.length;
        this.getPremiumData();
      }
    );
  }

  // getEmployeesApi(){
  //   this.api.getEmployeesApi().subscribe(
  //     (res) => {
  //       console.log('employees response ====>', res);
  //     }
  //   );
  // }

  getDepartments(){
    this.api.getDepartments().subscribe(
      (res: Departments[]) => {
        this.departments = res;
        this. getEmployees();
      }
    );
  }

  getDepartmentName(deptId: number){
    return this.departments.filter(item => item.deptId = deptId);
  }

  isVipEmploee(emp: Employees){
    return new Date(emp.hire_date).getFullYear() < 2020 ? true : false;
  }

  getPremiumData(){
    this.employees =  this.employeesCopy
     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  changeSortOrder(dept: Departments){
    this.departmentName = dept.deptName;
    this.employees = this.empFilterPipe.transform(this.employeesCopy, dept);
    this.page = 1;
  }

}
