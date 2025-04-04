import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormSubmissionComponent } from "./app/components/form-submission/form-submission.component";
import { AuthComponent } from "./app/components/auth/auth.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormSubmissionComponent, AuthComponent]
})
export class AppComponent {
logout: any;
title: any;
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Running in the browser');
      document.title = 'My Angular App'; // ✅ This is now safe
    }
  }
}
