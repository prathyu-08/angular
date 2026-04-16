import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerSidebarComponent } from '../../../shared/employer-sidebar/employer-sidebar';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [CommonModule, EmployerSidebarComponent],
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent {}