import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-crud-app';

  constructor(private _dialog: MatDialog) {}

  employeeForm() {
    this._dialog.open(EmployeeComponent)
  }
}
