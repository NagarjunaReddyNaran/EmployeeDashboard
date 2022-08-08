import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deptName'
})
export class DeptNamePipe implements PipeTransform {

  transform(value: number, ...args: any[][]): string {
    return args[0].find(x => x.deptId === value).deptName;
  }

}
