import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-submission',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './form-submission.component.html',
  styleUrls: ['./form-submission.component.scss']
})
export class FormSubmissionComponent {
  form: FormGroup;
  formFields = [
    { type: 'text', label: 'Full Name', name: 'fullName' },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'date', label: 'Date of Birth', name: 'dob' },
    { type: 'select', label: 'Gender', name: 'gender', options: ['Male', 'Female', 'Other'] },
    { type: 'checkbox', label: 'Skills', name: 'skills', options: ['HTML', 'CSS', 'JavaScript'] },
    { type: 'radio', label: 'Experience Level', name: 'experience', options: ['Beginner', 'Intermediate', 'Expert'] }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});

    // Initialize form controls dynamically
    this.formFields.forEach(field => {
      if (field.type === 'checkbox') {
        this.form.addControl(field.name, new FormArray([]));
      } else {
        this.form.addControl(field.name, new FormControl('', Validators.required));
      }
    });
  }

  onCheckboxChange(event: any, controlName: string, value: string) {
    const formArray: FormArray = this.form.get(controlName) as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(value));
    } else {
      const index = formArray.controls.findIndex(ctrl => ctrl.value === value);
      formArray.removeAt(index);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
