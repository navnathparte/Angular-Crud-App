import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  empForm: FormGroup;
  educations: string[] = [
    'Matric',
    'Deploma',
    'Doctor',
    'Graduate',
    'Post Graduate',
    'Other',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogref: DialogRef<EmployeeComponent>
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      dob: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee Added successfully');
          this._dialogref.close();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
