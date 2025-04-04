import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DragDropModule], 
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  form: FormGroup;

  availableFields = [
    { type: 'text', label: 'Text Field' },
    { type: 'textarea', label: 'Textarea' },
    { type: 'select', label: 'Dropdown' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'radio', label: 'Radio Button' },
    { type: 'date', label: 'Date Picker' }
  ];

  formFields: any[] = []; 
removeField: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.addFieldToForm(event.container.data[event.currentIndex]);
    }
  }

  addFieldToForm(field: any) {
    if (!field.controlName) {
      const controlName = `field_${this.formFields.length}`;
      this.form.addControl(controlName, this.fb.control('', Validators.required));
      field.controlName = controlName;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
