import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './service/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  employeeForm() {
    this._dialog.open(EmployeeComponent);
    this.getEmployeeList();
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (data: any) => {
        const res = data.data.map((elt: any) => {
          return {
            ...elt,
          };
        });
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: string) {
    this._empService.delateEmployee(id).subscribe({
      next: (res) => {
        alert('delete Successfully!');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  updateEmployee(id: string, data: string) {
    this._empService.updateEmployee(id, data).subscribe({
      next: (res) => {
        alert('updated Successfully!');
      },
      error: console.log,
    });
  }
}
