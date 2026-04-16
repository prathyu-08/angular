import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employer-single.component.html',
  styleUrls: ['./employer-single.component.css']
})
export class EmployerSingleComponent {

  contactForm = {
    fullName: '',
    workEmail: '',
    message: ''
  };

  navLinks = [
    { label: 'Home', hasDropdown: true },
    { label: 'Jobs', hasDropdown: true },
    { label: 'Employer', hasDropdown: true },
    { label: 'Candidate', hasDropdown: true },
    { label: 'Blog', hasDropdown: true },
    { label: 'Contact Us', hasDropdown: false },
    { label: 'Pages', hasDropdown: true }
  ];

  companyValues = [
    { icon: '🔵', label: 'Product Thinking' },
    { icon: '💬', label: 'Transparent Collaboration' },
    { icon: '👥', label: 'Experiments Over Ego' },
    { icon: '🌍', label: 'Global Impact' },
    { icon: '❤️', label: 'People-First Culture' }
  ];

  lifePerks = [
    {
      icon: 'remote',
      title: 'Remote-Friendly',
      desc: 'Work where you\'re most productive with quarterly in-person retreats and studio hubs worldwide.'
    },
    {
      icon: 'learning',
      title: 'Continuous Learning',
      desc: 'Annual stipend for conferences, certifications, and mentorship programs led by industry experts.'
    },
    {
      icon: 'health',
      title: 'Health + Wellness',
      desc: 'Premium medical cover, wellness allowances, and flexible time off to recharge and explore.'
    },
    {
      icon: 'growth',
      title: 'Growth Mindset',
      desc: 'Clear leveling frameworks, quarterly career conversations, and opportunities to switch squads.'
    }
  ];

  studioImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=300&h=200&fit=crop'
  ];

  snapshotItems = [
    { icon: 'globe', label: 'Website', value: 'skylinedigital.com', isLink: true },
    { icon: 'industry', label: 'Industry', value: 'Product Design & Engineering', isLink: false },
    { icon: 'dept', label: 'Departments', value: 'Design, Engineering, Research', isLink: false },
    { icon: 'office', label: 'Offices', value: 'SF · Berlin · Singapore · Remote', isLink: false },
    { icon: 'growth', label: 'Growth', value: '45% YoY revenue', isLink: false }
  ];

  openRoles = [
    {
      type: 'Full Time',
      typeClass: 'badge-green',
      title: 'Lead Product Designer',
      salary: '$120k - $150k',
      location: 'Remote · North America',
      posted: '3 days ago',
      urgent: false
    },
    {
      type: 'Contract',
      typeClass: 'badge-orange',
      title: 'Senior Frontend Engineer',
      salary: '€85k - €110k',
      location: 'Berlin, Germany',
      posted: '1 week ago',
      urgent: false
    },
    {
      type: 'Full Time',
      typeClass: 'badge-green',
      title: 'Platform Delivery Manager',
      salary: '$95k - $135k',
      location: 'Singapore',
      posted: '2 weeks ago',
      urgent: true
    }
  ];

  footerLinks = {
    quickLinks: ['Home', 'Contact Us', 'FAQs', 'About Us', 'Terms Of Use'],
    functional: ['Marketing', 'Graphic Design', 'Business Management', 'Software & Web Development', 'Admin', 'Database Administration', 'Advertising', 'Web Developer'],
    industry: ['Courier/Logistics', 'Travel/Tourism/Transportation', 'Fashion', 'Electronics', 'Automobile', 'Advertising/PR', 'Health & Fitness', 'Information Technology']
  };

  onSendMessage(): void {
    console.log('Message sent:', this.contactForm);
    alert('Message sent successfully!');
    this.contactForm = { fullName: '', workEmail: '', message: '' };
  }
}