import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './app/components/auth/auth.component';
import { FormSubmissionComponent } from './app/components/form-submission/form-submission.component';
import { FormBuilderComponent } from './app/components/form-builder/form-builder.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'form-submission', component: FormSubmissionComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
