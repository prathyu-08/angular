import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/landing/home-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { JobDetailsComponent } from './pages/jobs/job-details/job-details.component';
import { JobsListComponent } from './pages/jobs/jobs-list/jobs-list.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { PostJobComponent } from './pages/employer/post-job/post-job.component';
import { EmployerSingleComponent } from './pages/employer/employer-single/employer-single.component';
import { EmployerListComponent } from './pages/employer/employer-list/employer-list.component';
import { CandidateEditProfileComponent } from './pages/candidate/edit-profile/candidate-edit-profile.component';
import { CandidateBuildResumeComponent } from './pages/candidate/build-resume/candidate-build-resume.component';
import { CandidateDashboardComponent } from './pages/candidate/dashboard/candidate-dashboard.component';
import { DownloadCvComponent } from './pages/candidate/download-cv/download-cv.component';
import { MyApplicationsComponent } from './pages/candidate/my-applications/my-applications.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'jobs-list', component: JobsListComponent },
  { path: 'job-single', component: JobDetailsComponent },

  // Auth routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Employer routes
  { path: 'post-job', component: PostJobComponent },
  { path: 'employer-list', component: EmployerListComponent },
  { path: 'employer-single', component: EmployerSingleComponent },
  { path: 'company/:id', component: EmployerSingleComponent },

  // Candidate routes
  { path: 'candidate/dashboard', component: CandidateDashboardComponent },
  { path: 'candidate/edit-profile', component: CandidateEditProfileComponent },
  { path: 'candidate/build-resume', component: CandidateBuildResumeComponent },
  { path: 'candidate/download-cv', component: DownloadCvComponent },
  { path: 'candidate/applications', component: MyApplicationsComponent },
  { path: 'candidate/public-profile', component: CandidateBuildResumeComponent },
  { path: 'candidate/favourites', component: CandidateBuildResumeComponent },
  { path: 'candidate/manage-resume', component: CandidateBuildResumeComponent },
  { path: 'candidate/messages', component: CandidateBuildResumeComponent },
  { path: 'candidate/followings', component: CandidateBuildResumeComponent },
  { path: 'candidate/packages', component: CandidateBuildResumeComponent },
  { path: 'candidate/payments', component: CandidateBuildResumeComponent },

  { path: '**', redirectTo: '' },
];