export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date';
    required: boolean;
    options?: string[]; // For select, radio, and checkbox types
    validation?: {
      minLength?: number;
      maxLength?: number;
      pattern?: string;
    };
  }
  
  export interface FormTemplate {
    id: string;
    name: string;
    fields: FormField[];
    createdBy: string;
  }
  
  export interface FormSubmission {
    id: string;
    formId: string;
    data: { [key: string]: any }; // Stores form values dynamically
    submittedBy: string;
    submittedAt: Date;
  }
export interface FormTemplateWithSubmissions extends FormTemplate {
    submissions: FormSubmission[];
  }  