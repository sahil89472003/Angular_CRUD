import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

  constructor(private empser: EmployeeService) { }
  employeedata: any;
  insert(frm1: NgForm) {
    this.employeedata = frm1.value;
    this.empser.insertEmp(this.employeedata).subscribe((data: any) => {
      console.log(data);
      alert("Record Successfully Save");
    })

  }

}
