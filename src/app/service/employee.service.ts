import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any) {
    return this._http.post('http://localhost:3000/save', data);
  }

  getEmployeeList() {
    return this._http.get('http://localhost:3000/employee');
  }

  delateEmployee(id: string) {
    return this._http.delete(`http://localhost:3000/${id}`);
  }

  updateEmployee(id: string, data: any) {
    return this._http.put(`http://localhost:3000/update/${id}`, data);
  }
}
