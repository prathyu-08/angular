import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-applications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyApplicationsComponent {

  applications = [
    {
      id: 1,
      status: 'interview',
      statusLabel: 'Interview',
      title: 'Lead Product Designer',
      location: 'Remote · North America',
      company: 'Skyline Digital',
      team: 'Design Systems team',
      companyLogo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo1.jpg',
      pillText: 'Loop scheduled for Apr 20',
      pillIcon: 'fa-calendar-check',
      appliedDays: 12,
      source: 'via Jobs Portal',
      actionLabel: 'View thread',
      actionUrl: '#'
    },
    {
      id: 2,
      status: 'review',
      statusLabel: 'Review',
      title: 'Senior Frontend Engineer',
      location: 'Berlin, Germany',
      company: 'Bright Labs',
      team: 'Platform squad',
      companyLogo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo7.jpg',
      pillText: 'Awaiting recruiter response',
      pillIcon: 'fa-envelope-open-text',
      appliedDays: 5,
      source: 'Referral · Maya',
      actionLabel: 'Send nudge',
      actionUrl: '#'
    },
    {
      id: 3,
      status: 'offer',
      statusLabel: 'Offer',
      title: 'Product Design Manager',
      location: 'Toronto, Canada',
      company: 'Northwind Commerce',
      team: 'Growth org',
      companyLogo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo4.jpg',
      pillText: 'Offer received · reviewing',
      pillIcon: 'fa-badge-dollar',
      appliedDays: 22,
      source: 'Recruiter: Alex Chen',
      actionLabel: 'Open offer',
      actionUrl: '#'
    },
    {
      id: 4,
      status: 'archived',
      statusLabel: 'Archived',
      title: 'Staff UX Researcher',
      location: 'Austin, USA',
      company: 'CloudSync',
      team: 'Platform strategy',
      companyLogo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo9.jpg',
      pillText: 'Closed · keep warm',
      pillIcon: 'fa-circle-xmark',
      appliedDays: 0,
      appliedDate: 'Feb 03',
      source: 'Feedback saved',
      actionLabel: 'View notes',
      actionUrl: '#',
      isArchived: true
    }
  ];

  nextSteps = [
    {
      title: 'Prepare for Skyline loop',
      description: 'Portfolio presentation + systems whiteboard.',
      buttonLabel: 'Open prep kit'
    },
    {
      title: 'Follow up with Bright Labs',
      description: 'Send quick note if no update by Apr 18.',
      buttonLabel: 'Send reminder'
    }
  ];

  onFilter(): void {
    console.log('Filter clicked');
  }

  onSync(): void {
    console.log('Sync clicked');
  }
}
