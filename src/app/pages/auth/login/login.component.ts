import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  login() {

    console.log("Sending:", this.loginData);

    this.http.post(
      'http://localhost/NMKJobPortalCRM/public/legacy/index.php?entryPoint=portal_login',
      this.loginData
    ).subscribe({
      next: (res: any) => {

        console.log("Response:", res);

        if (res.status === 'success') {

          // ✅ store token
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));

          // Redirect based on user role
          const userRole = res.user?.role || res.user?.user_type || 'candidate';
          
          if (userRole === 'employer' || userRole === 'company') {
            this.router.navigate(['/employer/dashboard']);
          } else {
            this.router.navigate(['/candidate/dashboard']);
          }

        } else {
          alert('Invalid credentials ❌');
        }
      },

      error: (err) => {
        console.error(err);
        alert('API Error ❌');
      }
    });
  }
}