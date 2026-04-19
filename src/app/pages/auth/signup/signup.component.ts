import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule  
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  type: 'candidate' | 'employer' = 'candidate';

  // ✅ REQUIRED FOR HTML
  loading = false;
  apiError = '';
  successMsg = '';
  showPassword = false;

  formData = {
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    desired_role: ''
  };

  employerData = {
    company_name: '',
    website: '',
    email: '',
    password: '',
    confirm_password: '',
    team_size: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  // ✅ Password strength
  get passwordStrength(): string {
    const pass = this.type === 'candidate'
      ? this.formData.password
      : this.employerData.password;

    if (!pass) return '';  
    if (!pass || pass.length < 6) return 'weak';

    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[^A-Za-z0-9]/.test(pass);

    if (hasUpper && hasNumber && hasSpecial) return 'strong';
    if (hasUpper || hasNumber) return 'medium';

    return 'weak';
  }

  // ✅ Password match
  passwordsMatch(): boolean {
    if (this.type === 'candidate') {
      return this.formData.password === this.formData.confirm_password;
    }
    return this.employerData.password === this.employerData.confirm_password;
  }

  register() {

    // ❗ Validation
    if (!this.passwordsMatch()) {
      this.apiError = 'Passwords do not match ❌';
      return;
    }

    this.loading = true;
    this.apiError = '';
    this.successMsg = '';

    let payload: any;

    if (this.type === 'candidate') {
      payload = {
        email: this.formData.email,
        password: this.formData.password,
        first_name: this.formData.first_name,
        last_name: this.formData.last_name,
        user_type: 'candidate',
        desired_role: this.formData.desired_role
      };
    } else {
      payload = {
        email: this.employerData.email,
        password: this.employerData.password,
        first_name: this.employerData.company_name,
        last_name: 'Employer',
        user_type: 'employer',
        desired_role: 'Hiring'
      };
    }

    this.http.post(
      'http://localhost/NMKJobPortalCRM/public/legacy/index.php?entryPoint=portal_register',
      payload
    ).subscribe({
      next: (res: any) => {

        this.loading = false;

        if (res.status === 'success') {

          this.successMsg = 'Registration successful ✅ Redirecting...';

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);

        } else {
          this.apiError = 'Something went wrong ❌';
        }

      },
      error: () => {
        this.loading = false;
        this.apiError = 'API Error ❌';
      }
    });
  }
}