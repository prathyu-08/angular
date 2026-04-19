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
  selector: 'app-candidate-build-resume',
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
              <li><a href="#"><i class="fa-solid fa-user-pen"></i> Edit Profile</a></li>
              <li class="active"><a href="#"><i class="fa-solid fa-id-badge"></i> Build Resume</a></li>
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
            <div class="dashboard-page-header">
              <div>
                <h1>Build Your Resume</h1>
                <p>Craft a polished CV with guided sections, ATS-friendly formatting, and reusable snippets.</p>
              </div>
              <div class="d-flex flex-wrap gap-2">
                <a href="#" class="btn btn-outline-primary"><i class="fa-solid fa-eye"></i> Preview current</a>
                <a href="#" class="btn btn-primary"><i class="fa-solid fa-wand-magic-sparkle"></i> Start builder</a>
              </div>
            </div>

            <!-- Attached CV Section -->
            <div class="dashboard-panel mt-4">
              <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-0">Attached CV</h3>
                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></button>
              </div>
              <div class="table-responsive">
                <table class="table resume-table">
                  <thead>
                    <tr>
                      <th>CV Title</th>
                      <th>Default CV</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#" class="text-primary">My Resume</a></td>
                      <td><span class="badge bg-success">Default</span></td>
                      <td>2025-03-09 06:19:47</td>
                      <td>
                        <div class="action-icons">
                          <a href="#" class="text-primary" title="Download"><i class="fa fa-download"></i></a>
                          <a href="#" class="text-dark" title="Edit"><i class="fa fa-pencil"></i></a>
                          <a href="#" class="text-danger" title="Delete"><i class="fa fa-times"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Projects Section -->
            <div class="dashboard-panel mt-4">
              <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-0">Projects</h3>
                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></button>
              </div>
              <div class="projects-grid">
                <div class="project-card">
                  <div class="project-image">
                    <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/blog/1.jpg" alt="Project" />
                  </div>
                  <div class="project-content">
                    <h4>Jobs Portal</h4>
                    <p class="project-date">31 Jan, 2025 - 31 Jan, 2025</p>
                    <p class="project-description">This is just for testing</p>
                    <div class="project-actions">
                      <a href="#" class="text-primary">Edit</a>
                      <a href="#" class="text-danger">Delete</a>
                    </div>
                  </div>
                </div>
                <div class="project-card">
                  <div class="project-image">
                    <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/blog/2.jpg" alt="Project" />
                  </div>
                  <div class="project-content">
                    <h4>Burger Point</h4>
                    <p class="project-date">31 Jan, 2025 - 31 Jan, 2025</p>
                    <p class="project-description">This is just for testing project</p>
                    <div class="project-actions">
                      <a href="#" class="text-primary">Edit</a>
                      <a href="#" class="text-danger">Delete</a>
                    </div>
                  </div>
                </div>
                <div class="project-card">
                  <div class="project-image">
                    <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/blog/1.jpg" alt="Project" />
                  </div>
                  <div class="project-content">
                    <h4>Frontend Developer</h4>
                    <p class="project-date">01 Nov, 2025 - Currently ongoing</p>
                    <p class="project-description">Frontend Developer with I bring innovation...</p>
                    <div class="project-actions">
                      <a href="#" class="text-primary">Edit</a>
                      <a href="#" class="text-danger">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
             </div>

             <!-- Experience Section -->
             <div class="dashboard-panel mt-4">
               <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                 <h3 class="mb-0">Experience</h3>
                 <button type="button" class="btn btn-primary btn-sm" (click)="openExperienceModal()"><i class="fa fa-plus"></i> Add Experience</button>
               </div>
               <div class="experience-timeline">
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
                       <span><i class="fa fa-map-marker"></i> {{ exp.location }}</span>
                       <span><i class="fa fa-building"></i> {{ exp.company }}</span>
                       <span><i class="fa fa-calendar"></i> {{ formatDate(exp.startDate) }} - {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}</span>
                     </div>
                     <p>{{ exp.description }}</p>
                   </div>
                 </div>
               </div>
             </div>

             <!-- Education Section -->
             <div class="dashboard-panel mt-4">
               <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                 <h3 class="mb-0">Education</h3>
                 <button type="button" class="btn btn-primary btn-sm" (click)="openEducationModal()"><i class="fa fa-plus"></i> Add Education</button>
               </div>
               <div class="education-timeline">
                 <div class="education-item" *ngFor="let edu of educations">
                   <div class="education-content">
                     <div class="education-header">
                       <h4>{{ edu.degree }}</h4>
                       <div class="education-actions">
                         <a href="#" class="text-dark" title="Edit" (click)="editEducation(edu)"><i class="fa fa-pencil"></i></a>
                         <a href="#" class="text-danger" title="Delete" (click)="deleteEducation(edu.id)"><i class="fa fa-times"></i></a>
                       </div>
                     </div>
                     <p class="education-summary">{{ edu.year }}</p>
                     <div class="education-meta">
                       <span><i class="fa fa-graduation-cap"></i> {{ edu.degree.split(' ')[0] }}</span>
                       <span><i class="fa fa-map-marker"></i> {{ edu.location }}</span>
                       <span><i class="fa fa-building"></i> {{ edu.institution }}</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             <!-- Skills Section -->
             <div class="dashboard-panel mt-4">
               <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                 <h3 class="mb-0">Skills</h3>
                 <button type="button" class="btn btn-primary btn-sm" (click)="openSkillModal()"><i class="fa fa-plus"></i> Add Skill</button>
               </div>
               <div class="table-responsive">
                 <table class="table resume-table">
                   <thead>
                     <tr>
                       <th>Skill Name</th>
                       <th>Experience</th>
                       <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr *ngFor="let skill of skills">
                       <td>{{ skill.name }}</td>
                       <td>{{ skill.experience }}</td>
                       <td>
                         <div class="action-icons">
                           <a href="#" class="text-dark" title="Edit" (click)="editSkill(skill)"><i class="fa fa-pencil"></i></a>
                           <a href="#" class="text-danger" title="Delete" (click)="deleteSkill(skill.id)"><i class="fa fa-times"></i></a>
                         </div>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>

             <!-- Languages Section -->
             <div class="dashboard-panel mt-4">
              <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-0">Languages</h3>
                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></button>
              </div>
              <div class="table-responsive">
                <table class="table resume-table">
                  <thead>
                    <tr>
                      <th>Language Name</th>
                      <th>Proficiency Level</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Urdu</td><td>Expert</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                    <tr><td>English</td><td>Expert</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                    <tr><td>Arabic</td><td>Intermediate</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                    <tr><td>French</td><td>Beginner</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class CandidateBuildResumeComponent {
  skills: Skill[] = [
    { id: 1, name: 'Adobe Photoshop', experience: '14 Years' },
    { id: 2, name: 'Adobe Illustrator', experience: '9 years' },
    { id: 3, name: 'HTML', experience: '14 Years' },
    { id: 4, name: 'CSS', experience: '13 Years' },
    { id: 5, name: 'Artificial intelligence (AI)', experience: '2 years' }
  ];

  experiences: Experience[] = [
    {
      id: 1,
      title: 'UI UX Designer',
      company: 'Amoka Int',
      location: 'Lahore - Pakistan',
      startDate: '2009-12-13',
      endDate: '2012-02-07',
      description: 'Proactive and disciplined, I excel in ensuring maximum accessibility and elevating customer experiences throughout the development process.'
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Multimedia Design',
      location: 'Liege - Belgium',
      startDate: '2025-07-09',
      endDate: '2025-11-19',
      description: 'Passionate UI/UX Designer and Frontend Developer with a strong technical background.'
    }
  ];

  educations: Education[] = [
    {
      id: 1,
      degree: 'Matriculation/O-Level - Matric in Science',
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

  nextId = 5;

  // Skill methods
  openSkillModal(skill?: Skill): void {
    if (skill) {
      this.editingSkill = skill;
      this.skillForm = { name: skill.name, experience: skill.experience };
    } else {
      this.editingSkill = null;
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
    if (!this.skillForm.name.trim() || !this.skillForm.experience) {
      alert('Please fill in all fields');
      return;
    }

    if (this.editingSkill) {
      const skillId = this.editingSkill.id;
      const skill = this.skills.find(s => s.id === skillId);
      if (skill) {
        skill.name = this.skillForm.name;
        skill.experience = this.skillForm.experience;
      }
    } else {
      this.skills.push({ id: this.nextId++, name: this.skillForm.name, experience: this.skillForm.experience });
    }
    this.closeSkillModal();
  }

  editSkill(skill: Skill): void {
    this.openSkillModal(skill);
  }

  deleteSkill(id: number): void {
    if (confirm('Are you sure you want to delete this skill?')) {
      this.skills = this.skills.filter(s => s.id !== id);
    }
  }

  // Experience methods
  openExperienceModal(exp?: Experience): void {
    if (exp) {
      this.editingExperience = exp;
      this.experienceForm = { ...exp };
    } else {
      this.editingExperience = null;
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
      alert('Please fill in at least title and company');
      return;
    }

    if (this.editingExperience) {
      const expId = this.editingExperience.id;
      const index = this.experiences.findIndex(e => e.id === expId);
      if (index !== -1) {
        this.experiences[index] = { ...this.experienceForm };
      }
    } else {
      this.experiences.push({ ...this.experienceForm, id: this.nextId++ });
    }
    this.closeExperienceModal();
  }

  editExperience(exp: Experience): void {
    this.openExperienceModal(exp);
  }

  deleteExperience(id: number): void {
    if (confirm('Are you sure you want to delete this experience?')) {
      this.experiences = this.experiences.filter(e => e.id !== id);
    }
  }

  // Education methods
  openEducationModal(edu?: Education): void {
    if (edu) {
      this.editingEducation = edu;
      this.educationForm = { ...edu };
    } else {
      this.editingEducation = null;
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
      alert('Please fill in at least degree and institution');
      return;
    }

    if (this.editingEducation) {
      const eduId = this.editingEducation.id;
      const index = this.educations.findIndex(e => e.id === eduId);
      if (index !== -1) {
        this.educations[index] = { ...this.educationForm };
      }
    } else {
      this.educations.push({ ...this.educationForm, id: this.nextId++ });
    }
    this.closeEducationModal();
  }

  editEducation(edu: Education): void {
    this.openEducationModal(edu);
  }

  deleteEducation(id: number): void {
    if (confirm('Are you sure you want to delete this education?')) {
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
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
}