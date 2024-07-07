import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(private eser: EmployeeService, private actiroute: ActivatedRoute) { }
  employeedata: any;
  empid: any;
  ngOnInit(): void {
    this.empid = this.actiroute.snapshot.paramMap.get('id');
    this.eser.getEmpById(this.empid).subscribe((data) => {
      this.employeedata = data;
    })
  }

  update(emp: NgForm) {
    this.eser.updateEmp(emp.value, this.empid).subscribe((data) => {
      alert('Record Updated Successfully');
      console.log(this.empid);
    }, (err) => { alert("Something gone Wrong") });
  }
}
