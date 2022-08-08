import { Pipe, PipeTransform } from '@angular/core';
import { Departments } from 'src/models/department';

@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

  transform(employees: any[], filter: Departments) {
    if (!employees || !filter) {
      return employees;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return employees.filter(employee => employee.deptId == filter.deptId);
  }

}
