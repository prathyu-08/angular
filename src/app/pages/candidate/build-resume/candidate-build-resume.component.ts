import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-build-resume',
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
                    <h4>Frontend Develope</h4>
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
                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></button>
              </div>
              <div class="experience-timeline">
                <div class="experience-item">
                  <div class="experience-content">
                    <div class="experience-header">
                      <h4>UI UX Designer</h4>
                      <div class="experience-actions">
                        <a href="#" class="text-dark" title="Edit"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="text-danger" title="Delete"><i class="fa fa-times"></i></a>
                      </div>
                    </div>
                    <div class="experience-meta">
                      <span><i class="fa fa-map-marker"></i> Lahore - Pakistan</span>
                      <span><i class="fa fa-building"></i> Amoka Int</span>
                      <span><i class="fa fa-calendar"></i> From 13 Dec, 2009 - 07 Feb, 2012</span>
                    </div>
                    <p>Proactive and disciplined, I excel in ensuring maximum accessibility and elevating customer experiences throughout the development process.</p>
                  </div>
                </div>
                <div class="experience-item">
                  <div class="experience-content">
                    <div class="experience-header">
                      <h4>Graphic Designer</h4>
                      <div class="experience-actions">
                        <a href="#" class="text-dark" title="Edit"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="text-danger" title="Delete"><i class="fa fa-times"></i></a>
                      </div>
                    </div>
                    <div class="experience-meta">
                      <span><i class="fa fa-map-marker"></i> Liege - Belgium</span>
                      <span><i class="fa fa-building"></i> Multimedia Design</span>
                      <span><i class="fa fa-calendar"></i> From 09 Jul, 2025 - 19 Nov, 2025</span>
                    </div>
                    <p>Passionate UI/UX Designer and Frontend Developer with a strong technical background.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Education Section -->
            <div class="dashboard-panel mt-4">
              <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-0">Education</h3>
                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></button>
              </div>
              <div class="education-timeline">
                <div class="education-item">
                  <div class="education-content">
                    <div class="education-header">
                      <h4>Matriculation/O-Level - Matric in Science</h4>
                      <div class="education-actions">
                        <a href="#" class="text-dark" title="Edit"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="text-danger" title="Delete"><i class="fa fa-times"></i></a>
                      </div>
                    </div>
                    <p class="education-summary">2005 - Hafizabad - Pakistan</p>
                    <div class="education-meta">
                      <span><i class="fa fa-graduation-cap"></i> Matric</span>
                      <span><i class="fa fa-map-marker"></i> Hafizabad - Pakistan</span>
                      <span><i class="fa fa-building"></i> Govt School</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Skills Section -->
            <div class="dashboard-panel mt-4">
              <div class="panel-header d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-0">Skills</h3>
                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></button>
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
                    <tr><td>Adobe Photoshop</td><td>14 Years</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                    <tr><td>Adobe Illustrator</td><td>9 years</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                    <tr><td>HTML</td><td>14 Years</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                    <tr><td>CSS</td><td>13 Years</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
                    <tr><td>Artificial intelligence (AI)</td><td>2 years</td><td><div class="action-icons"><a href="#" class="text-dark"><i class="fa fa-pencil"></i></a><a href="#" class="text-danger"><i class="fa fa-times"></i></a></div></td></tr>
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
  `
})
export class CandidateBuildResumeComponent {}
