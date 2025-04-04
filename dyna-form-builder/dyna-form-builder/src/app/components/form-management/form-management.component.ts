import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss']
})
export class FormManagementComponent implements OnInit {
  forms: { id: number; name: string; fields: { type: string; label: string }[] }[] = [];
  selectedForm: FormGroup | null = null;
  createForm!: FormGroup; ngForm: FormGroup | null = null;
  viewForm: FormGroup | null = null;
  formDetails: FormGroup | null = null;
  formSettings: FormGroup | null = null;
  formPreview: FormGroup | null = null;
  formActions: FormGroup | null = null;
  formTemplates: FormGroup | null = null;
  formResponses: FormGroup | null = null;
  formIntegrations: FormGroup | null = null;
  formAnalytics: FormGroup | null = null;
  formNotifications: FormGroup | null = null;
  formSubmissions: FormGroup | null = null;   
resetForms: any;
syncForms: any;
exportForms: any;
importForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loadForms();
    this.initForm(); 
  }

  initForm() {
    this.createForm = this.fb.group({
      name: [''],
      fields: this.fb.array([]) 
    });
  }

  loadForms() {
    this.forms = [
      { id: 1, name: 'Contact Form', fields: [{ type: 'text', label: 'Name' }] },
      { id: 2, name: 'Survey Form', fields: [{ type: 'radio', label: 'Satisfaction' }] }
    ];
  }

  editForm(form: any) {
    this.selectedForm = this.fb.group({});
    form.fields.forEach((field: any) => {
      this.selectedForm?.addControl(field.label, this.fb.control(''));
    });
  }

  deleteForm(formId: number) {
    this.forms = this.forms.filter(form => form.id !== formId);
  }
}
