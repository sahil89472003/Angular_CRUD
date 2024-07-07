import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {

  constructor(private eser: EmployeeService, private rout: Router) { }
  employeedata: any;
  getEmp() {
    this.eser.retrieveEmp().subscribe(data => {
      this.employeedata = data;
    })
  }

  delemp(empid: number) {
    this.eser.deleteEmp(empid).subscribe(data => {
      console.log(empid)
      alert("Record Deleted");
    })
  }

  updateemp(empid: number) {
    this.rout.navigateByUrl('/update/' + empid)
  }
}
