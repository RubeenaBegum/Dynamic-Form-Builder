import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private storageKey = 'forms';
  private formsSubject = new BehaviorSubject<any[]>(this.getFormsFromStorage());

  constructor() {}

  private getFormsFromStorage(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveFormsToStorage(forms: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(forms));
    this.formsSubject.next(forms);
  }

  getForms(): Observable<any[]> {
    return this.formsSubject.asObservable();
  }

  getFormById(id: string): any {
    return this.getFormsFromStorage().find(form => form.id === id);
  }

  createForm(form: any): void {
    const forms = this.getFormsFromStorage();
    form.id = new Date().getTime().toString(); // Generate unique ID
    forms.push(form);
    this.saveFormsToStorage(forms);
  }

  updateForm(id: string, updatedForm: any): void {
    const forms = this.getFormsFromStorage().map(form =>
      form.id === id ? { ...form, ...updatedForm } : form
    );
    this.saveFormsToStorage(forms);
  }

  deleteForm(id: string): void {
    const forms = this.getFormsFromStorage().filter(form => form.id !== id);
    this.saveFormsToStorage(forms);
  }
}
