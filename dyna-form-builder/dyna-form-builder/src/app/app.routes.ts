import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AuthComponent } from './components/auth/auth.component';
import { FormSubmissionComponent } from './components/form-submission/form-submission.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'form-submission', component: FormSubmissionComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

bootstrapApplication(AuthComponent, {
  providers: [provideRouter(routes)]
});
