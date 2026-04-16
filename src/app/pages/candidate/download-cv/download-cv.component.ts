import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-download-cv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download-cv.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DownloadCvComponent {

  resumeVersions = [
    {
      title: 'General Product Resume',
      updated: 'Apr 10',
      template: 'Default',
      downloads: 4
    },
    {
      title: 'Fintech Lead Designer',
      updated: 'Mar 22',
      template: 'Minimal',
      downloads: 0
    },
    {
      title: 'Research-heavy Case Study',
      updated: 'Feb 14',
      template: 'Insight',
      downloads: 0
    }
  ];

  shareLinks = [
    {
      title: 'General resume link',
      url: 'jobsportal.com/cv/jordan',
      views: 86,
      expires: '30 days',
      requiresEmail: false
    },
    {
      title: 'Recruiter collaboration link',
      url: '',
      views: 0,
      expires: '',
      requiresEmail: true
    }
  ];

  downloadPdf(): void {
    console.log('Downloading PDF...');
  }

  downloadDocx(): void {
    console.log('Downloading DOCX...');
  }

  generateAtsPdf(): void {
    console.log('Generating ATS PDF...');
  }

  exportModernPdf(): void {
    console.log('Exporting modern PDF...');
  }

  createLink(): void {
    console.log('Creating share link...');
  }

  copyLink(link: any): void {
    console.log('Copying link:', link.url);
  }

  disableLink(link: any): void {
    console.log('Disabling link:', link.title);
  }
}
