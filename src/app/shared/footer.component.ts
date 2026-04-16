import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="footer" class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="relative w-10 h-9">
                <div class="absolute bottom-0 left-0 w-6 h-6 rounded-md bg-yellow-300" style="transform:rotate(45deg);"></div>
                <div class="absolute bottom-0 left-2 w-6 h-6 rounded-md bg-green-400 opacity-90" style="transform:rotate(45deg) translate(2px,-2px);"></div>
                <div class="absolute bottom-0 left-4 w-6 h-6 rounded-md bg-cyan-500 opacity-90" style="transform:rotate(45deg) translate(4px,-4px);"></div>
              </div>
              <div>
                <div class="font-extrabold text-lg text-cyan-400 tracking-wide" style="font-family:Georgia,serif;">NMK GLOBAL</div>
                <div class="text-[10px] text-gray-500 tracking-[2px] uppercase">incorporated</div>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">Connecting talent with opportunity since 2020. Your career journey starts here with NMK Global.</p>
            <div class="flex gap-3">
              <a *ngFor="let s of socials" [href]="s.href"
                 class="w-9 h-9 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-sm font-bold">
                {{ s.icon }}
              </a>
            </div>
          </div>
          <div *ngFor="let col of footerCols">
            <h4 class="font-extrabold text-white mb-4 text-xs uppercase tracking-widest">{{ col.title }}</h4>
            <ul class="space-y-3">
              <li *ngFor="let link of col.links">
                <a [href]="link.href" class="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                  <span class="w-1 h-1 bg-gray-600 group-hover:bg-green-400 rounded-full transition-colors duration-200"></span>
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2025 NMK Global Incorporated. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-green-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" class="hover:text-green-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" class="hover:text-green-400 transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  socials = [
    { icon: '𝕏', href: '#' },
    { icon: 'in', href: '#' },
    { icon: 'f', href: '#' },
    { icon: '◎', href: '#' },
  ];

  footerCols = [
    { title: 'For Job Seekers', links: [
      { label: 'Browse Jobs', href: '/jobs-list' },
      { label: 'Job Categories', href: '#categories' },
      { label: 'Career Resources', href: '#' },
      { label: 'Resume Builder', href: '#' },
      { label: 'Salary Guide', href: '#' },
    ]},
    { title: 'For Employers', links: [
      { label: 'Post a Job', href: '#' },
      { label: 'Search Resumes', href: '#' },
      { label: 'Pricing Plans', href: '#' },
      { label: 'Recruiting Tips', href: '#' },
      { label: 'Partner Program', href: '#' },
    ]},
    { title: 'Company', links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact Us', href: '#footer' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
    ]},
  ];
}

