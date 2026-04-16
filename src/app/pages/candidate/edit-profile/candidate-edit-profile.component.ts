import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
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

              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Skills</p>
                    <h3>Skills & Tools</h3>
                    <p>Highlight stacks, frameworks, and certifications.</p>
                  </div>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">Product Strategy</span>
                  <span class="skill-tag">Design Systems</span>
                  <span class="skill-tag">Figma</span>
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">UX Research</span>
                </div>
                <button type="button" class="add-skill-btn">
                  <i class="fa-solid fa-plus"></i> Add skill
                </button>
              </div>

              <div class="settings-card">
                <div class="settings-card-header">
                  <div>
                    <p class="text-uppercase text-muted small fw-semibold mb-1">Experience</p>
                    <h3>Experience & Education</h3>
                    <p>Keep your latest role and flagship education updated.</p>
                  </div>
                  <button type="button" class="btn btn-outline-secondary btn-sm rounded-3">
                    <i class="fa-solid fa-circle-plus"></i> Add entry
                  </button>
                </div>
                <div class="settings-grid">
                  <div>
                    <label class="form-label">Company</label>
                    <input type="text" class="form-control" placeholder="Skyline Digital" />
                  </div>
                  <div>
                    <label class="form-label">Role</label>
                    <input type="text" class="form-control" placeholder="Lead Product Designer" />
                  </div>
                  <div>
                    <label class="form-label">Start date</label>
                    <input type="month" class="form-control" />
                  </div>
                  <div>
                    <label class="form-label">End date</label>
                    <input type="month" class="form-control" />
                  </div>
                  <div class="grid-span-2">
                    <label class="form-label">Key highlights</label>
                    <textarea class="form-control" placeholder="Scaled design system, mentored 6 designers, partnered with research to ship 4 product lines."></textarea>
                  </div>
                  <div>
                    <label class="form-label">Education</label>
                    <input type="text" class="form-control" placeholder="Stanford · BSc Human Computer Interaction" />
                  </div>
                  <div>
                    <label class="form-label">Graduation year</label>
                    <input type="text" class="form-control" placeholder="2014" />
                  </div>
                </div>
              </div>

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

              <div class="form-actions">
                <button type="button" class="btn btn-outline-secondary">Cancel</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CandidateEditProfileComponent {}
