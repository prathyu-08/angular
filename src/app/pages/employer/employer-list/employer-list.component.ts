import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployerListComponent {

  searchQuery = '';
  selectedLocation = 'All locations';
  selectedIndustry = 'Industry';

  locations = ['All locations', 'Remote', 'USA - West Coast', 'Europe', 'APAC'];
  industries = ['Industry', 'Technology', 'Finance', 'Healthcare', 'E-commerce'];

  companySizeFilters = [
    { label: '1-50 employees', count: 12, checked: false },
    { label: '51-200 employees', count: 18, checked: false },
    { label: '201-1000 employees', count: 15, checked: false },
    { label: '1000+ employees', count: 9, checked: false }
  ];

  openPositionsFilters = [
    { label: '1-5 openings', count: 22, checked: false },
    { label: '6-15 openings', count: 16, checked: false },
    { label: '16+ openings', count: 8, checked: false }
  ];

  industryFilters = [
    { label: 'Technology', count: 24, checked: false },
    { label: 'Finance', count: 12, checked: false },
    { label: 'Healthcare', count: 10, checked: false },
    { label: 'E-commerce', count: 8, checked: false },
    { label: 'Consulting', count: 6, checked: false }
  ];

  workModelFilters = [
    { label: 'Remote-first', count: 28, checked: false },
    { label: 'Hybrid', count: 18, checked: false },
    { label: 'On-site', count: 6, checked: false }
  ];

  employers = [
    {
      id: 1,
      name: 'Skyline Digital',
      logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo1.jpg',
      verified: true,
      description: 'A multidisciplinary studio building immersive product experiences for finance, ecommerce, and emerging tech brands. We combine research-led design with battle-tested engineering to launch products that scale.',
      tags: ['Product Design', 'Engineering', 'Remote-friendly', 'Technology'],
      location: 'San Francisco, USA',
      employees: '180+',
      type: 'Digital Experience Studio',
      openPositions: 8,
      founded: 2014
    },
    {
      id: 2,
      name: 'Nexus Finance',
      logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo2.jpg',
      verified: true,
      description: 'Leading fintech platform revolutionizing digital banking. We\'re building the next generation of financial services with a focus on transparency, security, and user experience.',
      tags: ['Finance', 'Banking', 'Hybrid', 'Fintech'],
      location: 'New York, USA',
      employees: '250+',
      type: 'Fintech Platform',
      openPositions: 12,
      founded: 2016
    },
    {
      id: 3,
      name: 'HealthTech Solutions',
      logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo3.jpg',
      verified: true,
      description: 'Pioneering healthcare technology solutions that improve patient outcomes. Our AI-powered platform helps healthcare providers deliver better care through data-driven insights.',
      tags: ['Healthcare', 'AI/ML', 'Remote-first', 'Healthtech'],
      location: 'Boston, USA',
      employees: '95+',
      type: 'Healthcare Technology',
      openPositions: 6,
      founded: 2018
    },
    {
      id: 4,
      name: 'CloudCommerce',
      logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo4.jpg',
      verified: true,
      description: 'Empowering businesses to scale their online presence with our comprehensive e-commerce platform. We provide everything from storefront design to payment processing and analytics.',
      tags: ['E-commerce', 'SaaS', 'Hybrid', 'Platform'],
      location: 'Austin, TX',
      employees: '320+',
      type: 'E-commerce Platform',
      openPositions: 15,
      founded: 2015
    },
    {
      id: 5,
      name: 'DataVault',
      logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo5.jpg',
      verified: true,
      description: 'Transforming how businesses understand their data. Our analytics platform helps companies make informed decisions through real-time insights and predictive modeling.',
      tags: ['Data Science', 'Analytics', 'Remote-friendly', 'BI'],
      location: 'Seattle, USA',
      employees: '140+',
      type: 'Data Analytics',
      openPositions: 9,
      founded: 2017
    },
    {
      id: 6,
      name: 'GreenTech Innovations',
      logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo6.jpg',
      verified: true,
      description: 'Building sustainable technology solutions for a greener future. We develop IoT devices and software platforms that help businesses reduce their environmental impact.',
      tags: ['Clean Energy', 'IoT', 'Hybrid', 'Sustainability'],
      location: 'Portland, OR',
      employees: '75+',
      type: 'Sustainability Tech',
      openPositions: 5,
      founded: 2019
    }
  ];

  totalCompanies = 38;
  showingFrom = 1;
  showingTo = 12;

  onSearch(): void {
    console.log('Search:', this.searchQuery, this.selectedLocation, this.selectedIndustry);
  }

  toggleFollow(employer: any): void {
    employer.followed = !employer.followed;
  }
}
