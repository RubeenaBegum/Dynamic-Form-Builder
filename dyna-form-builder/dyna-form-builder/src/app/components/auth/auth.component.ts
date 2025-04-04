import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true, 
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class AuthComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { username, password } = this.authForm.value;

    const users = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'user', password: 'user123', role: 'user' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('isAuthenticated', 'true');

      const redirectPath = user.role === 'admin' ? '/form-builder' : '/form-submission';
      this.router.navigate([redirectPath]); 
    } else {
      alert('Invalid username or password!'); 
    }
  }
}
