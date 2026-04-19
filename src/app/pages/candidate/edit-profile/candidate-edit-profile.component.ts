import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Skill {
  id: number;
  name: string;
  experience: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  year: string;
}

@Component({
  selector: 'app-candidate-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Modals -->
    <div class="modal-overlay" [class.active]="showSkillModal || showExperienceModal || showEducationModal" (click)="closeAllModals()"></div>

    <!-- Skill Modal -->
    <div class="modal-dialog-centered" [class.active]="showSkillModal">
      <div class="modal-content">
        <div class="modal-header">
          <h4>{{ editingSkill ? 'Edit Skill' : 'Add Skill' }}</h4>
          <button type="button" class="modal-close" (click)="closeSkillModal()"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Skill Name</label>
            <input type="text" class="form-control" placeholder="e.g. JavaScript, Photoshop" [(ngModel)]="skillForm.name" />
          </div>
          <div class="form-group">
            <label class="form-label">Experience Level</label>
            <select class="form-select" [(ngModel)]="skillForm.experience">
              <option value="">Select experience</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" (click)="closeSkillModal()">Cancel</button>
          <button type="button" class="btn btn-primary" (click)="saveSkill()">Save</button>
        </div>
      </div>
    </div>

    <!-- Experience Modal -->
    <div class="modal-dialog-centered" [class.active]="showExperienceModal">
      <div class="modal-content">
        <div class="modal-header">
          <h4>{{ editingExperience ? 'Edit Experience' : 'Add Experience' }}</h4>
          <button type="button" class="modal-close" (click)="closeExperienceModal()"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Job Title</label>
              <input type="text" class="form-control" placeholder="e.g. UI/UX Designer" [(ngModel)]="experienceForm.title" />
            </div>
            <div class="form-group">
              <label class="form-label">Company</label>
              <input type="text" class="form-control" placeholder="e.g. Amoka Int" [(ngModel)]="experienceForm.company" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Location</label>
            <input type="text" class="form-control" placeholder="e.g. Lahore - Pakistan" [(ngModel)]="experienceForm.location" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Start Date</label>
              <input type="month" class="form-control" [(ngModel)]="experienceForm.startDate" />
            </div>
            <div class="form-group">
              <label class="form-label">End Date</label>
              <input type="month" class="form-control" [(ngModel)]="experienceForm.endDate" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea class="form-control" rows="3" placeholder="Describe your responsibilities and achievements..." [(ngModel)]="experienceForm.description"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" (click)="closeExperienceModal()">Cancel</button>
          <button type="button" class="btn btn-primary" (click)="saveExperience()">Save</button>
        </div>
      </div>
    </div>

    <!-- Education Modal -->
    <div class="modal-dialog-centered" [class.active]="showEducationModal">
      <div class="modal-content">
        <div class="modal-header">
          <h4>{{ editingEducation ? 'Edit Education' : 'Add Education' }}</h4>
          <button type="button" class="modal-close" (click)="closeEducationModal()"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Degree / Qualification</label>
            <input type="text" class="form-control" placeholder="e.g. BSc Computer Science" [(ngModel)]="educationForm.degree" />
          </div>
          <div class="form-group">
            <label class="form-label">Institution</label>
            <input type="text" class="form-control" placeholder="e.g. University of Example" [(ngModel)]="educationForm.institution" />
          </div>
          <div class="form-group">
            <label class="form-label">Location</label>
            <input type="text" class="form-control" placeholder="e.g. New York, USA" [(ngModel)]="educationForm.location" />
          </div>
          <div class="form-group">
            <label class="form-label">Year</label>
            <input type="text" class="form-control" placeholder="e.g. 2014-2018 or 2018" [(ngModel)]="educationForm.year" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" (click)="closeEducationModal()">Cancel</button>
          <button type="button" class="btn btn-primary" (click)="saveEducation()">Save</button>
        </div>
      </div>
    </div>

    <section class="page-content">
      <div class="container">
        <div class="dashboard-layout">
          <aside class="dashboard-sidebar">
            <div class="sidebar-header">
              <div class="status-toggle">
                <div>
                  <span class="status-label">Open to Work</span>
                  <small class="status-note">Visible to recruiters</small>
                </div>
                <label class="status-switch">
                  <input type="checkbox" checked />
                  <span class="status-slider"></span>
                </label>
              </div>
              <h2>Job Seeker</h2>
              <p>jobseeker&#64;jobsportal.com</p>
            </div>
            <ul class="dashboard-nav">
              <li><a href="#"><i class="fa-solid fa-gauge"></i> Dashboard</a></li>
              <li class="active"><a href="#"><i class="fa-solid fa-user-pen"></i> Edit Profile</a></li>
              <li><a href="#"><i class="fa-solid fa-id-badge"></i> Build Resume</a></li>
              <li><a href="#"><i class="fa-solid fa-download"></i> Download CV</a></li>
              <li><a href="#"><i class="fa-solid fa-eye"></i> View Public Profile</a></li>
              <li><a href="#"><i class="fa-solid fa-briefcase"></i> My Job Applications</a></li>
              <li><a href="#"><i class="fa-solid fa-heart"></i> My Favourite Jobs</a></li>
              <li><a href="#"><i class="fa-solid fa-bell"></i> Job Alerts</a></li>
              <li><a href="#"><i class="fa-solid fa-file-pen"></i> Manage Resume</a></li>
              <li><a href="#"><i class="fa-solid fa-envelope"></i> My Messages</a></li>
              <li><a href="#"><i class="fa-solid fa-people-group"></i> My Followings</a></li>
              <li><a href="#"><i class="fa-solid fa-boxes-stacked"></i> Packages</a></li>
              <li><a href="#"><i class="fa-solid fa-credit-card"></i> Payment History</a></li>
              <li><a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
            </ul>
          </aside>
          <div class="dashboard-main">
            <div class="settings-header">
              <div class="avatar-upload">
                <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/candidates/01.jpg" alt="Job Seeker" />
                <label class="upload-label">
                  <input type="file" />
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                  Update Photo
                </label>
              </div>
              <div class="settings-header-content">
                <span>Candidate Profile</span>
                <h2>Job Seeker</h2>
                <p>Keep your information fresh so hiring teams understand your intent, availability and the type of roles you're excited about.</p>
                <div class="settings-header-meta">
                  <span><i class="fa-solid fa-briefcase"></i> Product Design Lead</span>
                  <span><i class="fa-solid fa-location-dot"></i> Remote · USA</span>
                  <span><i class="fa-solid fa-clock"></i> Updated 2 days ago</span>
                </div>
              </div>
            </div>

            <form class="settings-form">
              <!-- Personal Information Card -->
              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Profile</p>
                    <h3>Personal Information</h3>
                    <p>These details power your public profile and application cards.</p>
                  </div>
                  <button type="button" class="btn btn-outline-primary btn-sm rounded-3">
                    <i class="fa-solid fa-file-arrow-up"></i> Upload résumé
                  </button>
                </div>
                <div class="settings-grid">
                  <div>
                    <label class="form-label">Full name</label>
                    <input type="text" class="form-control" placeholder="Jordan Blake" />
                  </div>
                  <div>
                    <label class="form-label">Professional title</label>
                    <input type="text" class="form-control" placeholder="Lead Product Designer" />
                  </div>
                  <div>
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="you&#64;company.com" />
                  </div>
                  <div>
                    <label class="form-label">Phone</label>
                    <input type="tel" class="form-control" placeholder="+1 234 567 890" />
                  </div>
                  <div>
                    <label class="form-label">Primary location</label>
                    <input type="text" class="form-control" placeholder="Seattle, USA" />
                  </div>
                  <div>
                    <label class="form-label">Preferred locations</label>
                    <input type="text" class="form-control" placeholder="Remote · San Francisco · Berlin" />
                  </div>
                  <div>
                    <label class="form-label">Website</label>
                    <input type="url" class="form-control" placeholder="https://www.personal-site.com" />
                  </div>
                  <div>
                    <label class="form-label">Portfolio / Case study</label>
                    <input type="url" class="form-control" placeholder="https://dribbble.com/jordan" />
                  </div>
                  <div class="grid-span-2">
                    <label class="form-label">About you</label>
                    <textarea class="form-control" placeholder="Summarize your superpowers, recent wins, and what you're looking for next."></textarea>
                  </div>
                </div>
              </div>

              <!-- Professional Snapshot Card -->
              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Career</p>
                    <h3>Professional Snapshot</h3>
                    <p>Showcase your current standing and ideal role.</p>
                  </div>
                </div>
                <div class="settings-grid">
                  <div>
                    <label class="form-label">Experience level</label>
                    <select class="form-select">
                      <option selected>10+ years</option>
                      <option>8-10 years</option>
                      <option>5-7 years</option>
                      <option>2-4 years</option>
                      <option>Entry level</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label">Current company</label>
                    <input type="text" class="form-control" placeholder="Skyline Digital" />
                  </div>
                  <div>
                    <label class="form-label">Notice period</label>
                    <select class="form-select">
                      <option selected>2 weeks</option>
                      <option>1 week</option>
                      <option>30 days</option>
                      <option>45 days</option>
                      <option>Immediately available</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label">Desired employment</label>
                    <select class="form-select">
                      <option selected>Full-time</option>
                      <option>Contract</option>
                      <option>Freelance</option>
                      <option>Internship</option>
                      <option>Part-time</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label">Salary expectation</label>
                    <input type="text" class="form-control" placeholder="USD 120k – 150k / year" />
                  </div>
                  <div>
                    <label class="form-label">Work preference</label>
                    <select class="form-select">
                      <option selected>Remote friendly</option>
                      <option>On-site only</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  <div class="grid-span-2">
                    <label class="form-label">Target roles</label>
                    <textarea class="form-control" placeholder="Principal Product Designer, Product Design Manager, Design Lead"></textarea>
                  </div>
                </div>
              </div>

              <!-- Skills Card -->
              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Skills</p>
                    <h3>Skills & Tools</h3>
                    <p>Highlight stacks, frameworks, and certifications.</p>
                  </div>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag" *ngFor="let skill of skills">
                    {{ skill.name }}
                    <button type="button" class="skill-tag-remove" (click)="editSkill(skill)" title="Edit"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="skill-tag-remove" (click)="deleteSkill(skill.id)" title="Delete"><i class="fa-solid fa-times"></i></button>
                  </span>
                </div>
                <button type="button" class="add-skill-btn" (click)="openSkillModal()">
                  <i class="fa-solid fa-plus"></i> Add skill
                </button>
              </div>

              <!-- Experience Card -->
              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Experience</p>
                    <h3>Work Experience</h3>
                    <p>Your professional work history.</p>
                  </div>
                  <button type="button" class="btn btn-outline-secondary btn-sm rounded-3" (click)="openExperienceModal()">
                    <i class="fa-solid fa-circle-plus"></i> Add entry
                  </button>
                </div>
                <div class="experience-list">
                  <div class="experience-item" *ngFor="let exp of experiences">
                    <div class="experience-content">
                      <div class="experience-header">
                        <h4>{{ exp.title }}</h4>
                        <div class="experience-actions">
                          <a href="#" class="text-dark" title="Edit" (click)="editExperience(exp)"><i class="fa fa-pencil"></i></a>
                          <a href="#" class="text-danger" title="Delete" (click)="deleteExperience(exp.id)"><i class="fa fa-times"></i></a>
                        </div>
                      </div>
                      <div class="experience-meta">
                        <span><i class="fa fa-building"></i> {{ exp.company }}</span>
                        <span><i class="fa fa-map-marker"></i> {{ exp.location }}</span>
                        <span><i class="fa fa-calendar"></i> {{ formatDate(exp.startDate) }} - {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}</span>
                      </div>
                      <p>{{ exp.description }}</p>
                    </div>
                  </div>
                  <p *ngIf="experiences.length === 0" class="empty-state">No experience added yet. Click "Add entry" to add your work experience.</p>
                </div>
              </div>

              <!-- Education Card -->
              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Education</p>
                    <h3>Education</h3>
                    <p>Your academic qualifications.</p>
                  </div>
                  <button type="button" class="btn btn-outline-secondary btn-sm rounded-3" (click)="openEducationModal()">
                    <i class="fa-solid fa-circle-plus"></i> Add entry
                  </button>
                </div>
                <div class="education-list">
                  <div class="education-item" *ngFor="let edu of educations">
                    <div class="education-header">
                      <h4>{{ edu.degree }}</h4>
                      <div class="education-actions">
                        <a href="#" class="text-dark" title="Edit" (click)="editEducation(edu)"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="text-danger" title="Delete" (click)="deleteEducation(edu.id)"><i class="fa fa-times"></i></a>
                      </div>
                    </div>
                    <p class="education-summary">{{ edu.institution }} · {{ edu.location }} · {{ edu.year }}</p>
                  </div>
                  <p *ngIf="educations.length === 0" class="empty-state">No education added yet. Click "Add entry" to add your education.</p>
                </div>
              </div>

              <!-- Social Links Card -->
              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Links</p>
                    <h3>Social & Contact Links</h3>
                    <p>Share channels where hiring teams can follow your work.</p>
                  </div>
                </div>
                <div class="settings-grid">
                  <div>
                    <label class="form-label">LinkedIn</label>
                    <input type="url" class="form-control" placeholder="https://www.linkedin.com/in/username" />
                  </div>
                  <div>
                    <label class="form-label">Dribbble</label>
                    <input type="url" class="form-control" placeholder="https://dribbble.com/username" />
                  </div>
                  <div>
                    <label class="form-label">GitHub / Code</label>
                    <input type="url" class="form-control" placeholder="https://github.com/username" />
                  </div>
                  <div>
                    <label class="form-label">Twitter / X</label>
                    <input type="url" class="form-control" placeholder="https://twitter.com/username" />
                  </div>
                </div>
              </div>

              <!-- Form Actions -->
              <div class="form-actions">
                <button type="button" class="btn btn-outline-secondary">Cancel</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class CandidateEditProfileComponent {
  skills: Skill[] = [
    { id: 1, name: 'Product Strategy', experience: '' },
    { id: 2, name: 'Design Systems', experience: '' },
    { id: 3, name: 'Figma', experience: '' },
    { id: 4, name: 'React', experience: '' },
    { id: 5, name: 'UX Research', experience: '' }
  ];

  experiences: Experience[] = [
    {
      id: 1,
      title: 'UI UX Designer',
      company: 'Amoka Int',
      location: 'Lahore - Pakistan',
      startDate: '2009-12',
      endDate: '2012-02',
      description: 'Proactive and disciplined, I excel in ensuring maximum accessibility and elevating customer experiences throughout the development process.'
    }
  ];

  educations: Education[] = [
    {
      id: 1,
      degree: 'Matriculation/O-Level',
      institution: 'Govt School',
      location: 'Hafizabad - Pakistan',
      year: '2005'
    }
  ];

  // Modal states
  showSkillModal = false;
  showExperienceModal = false;
  showEducationModal = false;

  // Edit tracking
  editingSkill: Skill | null = null;
  editingExperience: Experience | null = null;
  editingEducation: Education | null = null;

  // Form models
  skillForm: { name: string; experience: string } = { name: '', experience: '' };
  experienceForm: Experience = { id: 0, title: '', company: '', location: '', startDate: '', endDate: '', description: '' };
  educationForm: Education = { id: 0, degree: '', institution: '', location: '', year: '' };

  nextSkillId = 6;
  nextExperienceId = 2;
  nextEducationId = 2;

  // Skill methods
  openSkillModal(skill?: Skill): void {
    this.editingSkill = skill || null;
    if (skill) {
      this.skillForm = { name: skill.name, experience: skill.experience };
    } else {
      this.skillForm = { name: '', experience: '' };
    }
    this.showSkillModal = true;
  }

  closeSkillModal(): void {
    this.showSkillModal = false;
    this.editingSkill = null;
    this.skillForm = { name: '', experience: '' };
  }

  saveSkill(): void {
    if (!this.skillForm.name.trim()) {
      alert('Please enter a skill name');
      return;
    }

    if (this.editingSkill) {
      const skill = this.skills.find(s => s.id === this.editingSkill!.id);
      if (skill) {
        skill.name = this.skillForm.name;
        skill.experience = this.skillForm.experience;
      }
    } else {
      this.skills.push({ id: this.nextSkillId++, name: this.skillForm.name, experience: this.skillForm.experience });
    }
    this.closeSkillModal();
  }

  editSkill(skill: Skill): void {
    this.openSkillModal(skill);
  }

  deleteSkill(id: number): void {
    if (confirm('Delete this skill?')) {
      this.skills = this.skills.filter(s => s.id !== id);
    }
  }

  // Experience methods
  openExperienceModal(exp?: Experience): void {
    this.editingExperience = exp || null;
    if (exp) {
      this.experienceForm = { ...exp };
    } else {
      this.experienceForm = { id: 0, title: '', company: '', location: '', startDate: '', endDate: '', description: '' };
    }
    this.showExperienceModal = true;
  }

  closeExperienceModal(): void {
    this.showExperienceModal = false;
    this.editingExperience = null;
    this.experienceForm = { id: 0, title: '', company: '', location: '', startDate: '', endDate: '', description: '' };
  }

  saveExperience(): void {
    if (!this.experienceForm.title.trim() || !this.experienceForm.company.trim()) {
      alert('Please enter title and company');
      return;
    }

    if (this.editingExperience) {
      const index = this.experiences.findIndex(e => e.id === this.editingExperience!.id);
      if (index !== -1) {
        this.experiences[index] = { ...this.experienceForm };
      }
    } else {
      this.experiences.push({ ...this.experienceForm, id: this.nextExperienceId++ });
    }
    this.closeExperienceModal();
  }

  editExperience(exp: Experience): void {
    this.openExperienceModal(exp);
  }

  deleteExperience(id: number): void {
    if (confirm('Delete this experience?')) {
      this.experiences = this.experiences.filter(e => e.id !== id);
    }
  }

  // Education methods
  openEducationModal(edu?: Education): void {
    this.editingEducation = edu || null;
    if (edu) {
      this.educationForm = { ...edu };
    } else {
      this.educationForm = { id: 0, degree: '', institution: '', location: '', year: '' };
    }
    this.showEducationModal = true;
  }

  closeEducationModal(): void {
    this.showEducationModal = false;
    this.editingEducation = null;
    this.educationForm = { id: 0, degree: '', institution: '', location: '', year: '' };
  }

  saveEducation(): void {
    if (!this.educationForm.degree.trim() || !this.educationForm.institution.trim()) {
      alert('Please enter degree and institution');
      return;
    }

    if (this.editingEducation) {
      const index = this.educations.findIndex(e => e.id === this.editingEducation!.id);
      if (index !== -1) {
        this.educations[index] = { ...this.educationForm };
      }
    } else {
      this.educations.push({ ...this.educationForm, id: this.nextEducationId++ });
    }
    this.closeEducationModal();
  }

  editEducation(edu: Education): void {
    this.openEducationModal(edu);
  }

  deleteEducation(id: number): void {
    if (confirm('Delete this education?')) {
      this.educations = this.educations.filter(e => e.id !== id);
    }
  }

  closeAllModals(): void {
    this.closeSkillModal();
    this.closeExperienceModal();
    this.closeEducationModal();
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr + '-01'); // month input gives YYYY-MM
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
}