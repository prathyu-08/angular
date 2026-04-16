import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

type NavItem = {
  label: string;
  href?: string;
  route?: string;
  dropdown?: Array<{ label: string; href?: string; route?: string }>;
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-[72px]">
          <!-- NMK Global Logo -->
          <a [routerLink]="'/'" class="flex items-center gap-3 flex-shrink-0">
            <div class="relative w-12 h-10">
              <div class="absolute bottom-0 left-0 w-7 h-7 rounded-[6px] bg-yellow-300" style="transform: rotate(45deg) translate(0px,0px);"></div>
              <div class="absolute bottom-0 left-2.5 w-7 h-7 rounded-[6px] bg-green-400 opacity-90" style="transform: rotate(45deg) translate(2px,-2px);"></div>
              <div class="absolute bottom-0 left-5 w-7 h-7 rounded-[6px] bg-cyan-500 opacity-90" style="transform: rotate(45deg) translate(4px,-4px);"></div>
            </div>
            <div class="leading-none">
              <div class="text-[22px] font-extrabold tracking-tight" style="color:#1a9bc0; font-family: 'Georgia', serif; letter-spacing:1px;">
                NMK <span style="color:#1a9bc0;">GLOBAL</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                <div class="h-[2px] w-14 bg-cyan-500 rounded"></div>
                <div class="h-[1px] w-14 bg-cyan-400 rounded"></div>
                <div class="h-[1px] w-10 bg-cyan-300 rounded"></div>
              </div>
              <div class="text-[10px] text-gray-400 font-medium tracking-[3px] uppercase mt-0.5">incorporated</div>
            </div>
          </a>

          <!-- Nav Links -->
          <nav class="hidden lg:flex items-center gap-0.5">
            <div *ngFor="let item of navItems; let i = index" class="relative group">
              <a
                *ngIf="item.route && !item.dropdown?.length; else dropdownLink"
                [routerLink]="item.route"
                class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-150 flex items-center gap-1"
              >
                {{ item.label }}
              </a>
              <ng-template #dropdownLink>
                <a
                  href="javascript:void(0)"
                  (click)="toggleDropdown(i)"
                  class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-150 flex items-center gap-1 cursor-pointer"
                >
                  {{ item.label }}
                  <svg *ngIf="item.dropdown?.length" class="w-3 h-3 text-gray-400 transition-transform" [class.rotate-180]="openDropdownIndex() === i" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </a>
              </ng-template>

              <div *ngIf="item.dropdown?.length"
                   class="absolute left-0 top-full pt-2 min-w-[230px] transition-all duration-150 z-50"
                   [class.opacity-0]="openDropdownIndex() !== i"
                   [class.invisible]="openDropdownIndex() !== i"
                   [class.translate-y-1]="openDropdownIndex() !== i"
                   [class.opacity-100]="openDropdownIndex() === i"
                   [class.visible]="openDropdownIndex() === i"
                   [class.translate-y-0]="openDropdownIndex() === i">
                <div class="bg-white rounded-xl shadow-xl border border-gray-100 py-2 max-h-[420px] overflow-y-auto" (click)="closeDropdowns()">
                  <ng-container *ngFor="let sub of item.dropdown">
                    <a
                      *ngIf="sub.route; else subHref"
                      [routerLink]="sub.route"
                      class="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-150"
                    >{{ sub.label }}</a>
                    <ng-template #subHref>
                      <a
                        [attr.href]="sub.href || '#'"
                        class="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-150"
                      >{{ sub.label }}</a>
                    </ng-template>
                  </ng-container>
                </div>
              </div>
            </div>
          </nav>

          <!-- Actions -->
          <div class="hidden lg:flex items-center gap-3">
            <a routerLink="/login" class="px-6 py-2.5 text-sm font-bold text-cyan-600 border-2 border-cyan-500 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200">Sign in</a>
            <a routerLink="/signup" class="px-6 py-2.5 text-sm font-bold text-white bg-green-500 hover:bg-green-600 rounded-full transition-all duration-200 shadow-md">Register</a>
          </div>

          <!-- Mobile btn -->
          <button (click)="menuOpen.set(!menuOpen())" class="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!menuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path *ngIf="menuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="menuOpen()" class="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
        <div *ngFor="let item of navItems" class="space-y-1">
          <a
            *ngIf="item.route && !item.dropdown?.length; else mDropdownLink"
            [routerLink]="item.route"
            (click)="menuOpen.set(false)"
            class="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
          >{{ item.label }}</a>
          <ng-template #mDropdownLink>
            <a
              href="javascript:void(0)"
              (click)="toggleMobileMenu(item)"
              class="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg flex items-center justify-between"
            >
              {{ item.label }}
              <svg *ngIf="item.dropdown?.length" class="w-4 h-4" [class.rotate-180]="mobileOpenMenus().includes(item.label)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
          </ng-template>

          <ng-container *ngIf="item.dropdown?.length && mobileOpenMenus().includes(item.label)">
            <ng-container *ngFor="let sub of item.dropdown">
              <a
                *ngIf="sub.route; else mSubHref"
                [routerLink]="sub.route"
                (click)="menuOpen.set(false)"
                class="block ml-6 px-4 py-2 text-xs font-medium text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
              >{{ sub.label }}</a>
              <ng-template #mSubHref>
                <a
                  [attr.href]="sub.href || '#'"
                  (click)="menuOpen.set(false)"
                  class="block ml-6 px-4 py-2 text-xs font-medium text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                >{{ sub.label }}</a>
              </ng-template>
            </ng-container>
          </ng-container>
        </div>
        <div class="pt-3 flex gap-3 border-t border-gray-100">
          <a routerLink="/login" class="flex-1 text-center py-2.5 text-sm font-bold text-cyan-600 border-2 border-cyan-500 rounded-full">Sign in</a>
          <a routerLink="/signup" class="flex-1 text-center py-2.5 text-sm font-bold text-white bg-green-500 rounded-full">Register</a>
        </div>
      </div>
    </header>
  `,
})
export class NavbarComponent {
  menuOpen = signal(false);
  openDropdownIndex = signal<number>(-1);
  mobileOpenMenus = signal<string[]>([]);

  toggleDropdown(index: number): void {
    if (this.openDropdownIndex() === index) {
      this.openDropdownIndex.set(-1);
    } else {
      this.openDropdownIndex.set(index);
    }
  }

  closeDropdowns(): void {
    this.openDropdownIndex.set(-1);
  }

  toggleMobileMenu(item: NavItem): void {
    const current = this.mobileOpenMenus();
    if (current.includes(item.label)) {
      this.mobileOpenMenus.set(current.filter(m => m !== item.label));
    } else {
      this.mobileOpenMenus.set([...current, item.label]);
    }
  }

  navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    {
      label: 'Jobs',
      route: '/jobs-list',
      dropdown: [
        { label: 'Jobs List View', route: '/jobs-list' },
        { label: 'Job Single', route: '/job-single' },
      ],
    },
    {
      label: 'Employer',
      route: '/post-job',
      dropdown: [
        { label: 'Employer List', route: '/employer-list' },
        { label: 'Employer Grid', href: '#' },
        { label: 'Employer Single', route: '/employer-single' },
        { label: 'Employer Dashboard', href: '#' },
        { label: 'Post Job', route: '/post-job' },
        { label: 'Job Single', route: '/job-single' },
      ],
    },
    {
      label: 'Candidate',
      route: '/candidate/dashboard',
      dropdown: [
        { label: 'Candidate List', href: '#' },
        { label: 'Candidate Grid View', href: '#' },
        { label: 'Candidate Single', href: '#' },
        { label: 'Candidate Dashboard', route: '/candidate/dashboard' },
        { label: 'Edit Profile', route: '/candidate/edit-profile' },
        { label: 'Build Resume', route: '/candidate/build-resume' },
        { label: 'Download CV', route: '/candidate/download-cv' },
        { label: 'View Public Profile', route: '/candidate/build-resume' },
        { label: 'My Job Applications', route: '/candidate/build-resume' },
        { label: 'My Favourite Jobs', route: '/candidate/build-resume' },
        { label: 'Job Alerts', route: '/candidate/build-resume' },
        { label: 'Manage Resume', route: '/candidate/build-resume' },
        { label: 'My Messages', route: '/candidate/build-resume' },
        { label: 'My Followings', route: '/candidate/build-resume' },
        { label: 'Packages', route: '/candidate/build-resume' },
        { label: 'Payment History', route: '/candidate/build-resume' },
      ],
    },
    { label: 'Contact Us', href: '#footer' },
  ];
}

