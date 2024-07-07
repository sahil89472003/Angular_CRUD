import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http1: HttpClient) { }

  retrieveEmp() {
    return this.http1.get("http://localhost:3000/emp");
  }

  deleteEmp(empid: number) {
    return this.http1.delete("http://localhost:3000/emp/" + empid)
  }

  insertEmp(body: any) {
    return this.http1.post("http://localhost:3000/emp", body);
  }

  updateEmp(body: any, id: any) {
    return this.http1.put("http://localhost:3000/emp/" + id, body);
  }

  getEmpById(id: any) {
    return this.http1.get("http://localhost:3000/emp/" + id)
  }

}
