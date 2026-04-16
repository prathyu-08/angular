import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="candidate-dashboard-section">
      <div class="container-wide container-large">
        <div class="candidate-dashboard-layout">
          <aside class="candidate-sidebar">
            <div class="candidate-sidebar-header">
              <div class="candidate-status-toggle">
                <div class="candidate-status-info">
                  <span class="candidate-status-label">Open to Work</span>
                  <small class="candidate-status-note">Visible to recruiters</small>
                </div>
                <label class="candidate-switch">
                  <input type="checkbox" checked />
                  <span class="candidate-slider"></span>
                </label>
              </div>
              <h2>Job Seeker</h2>
              <p>jobseeker&#64;jobsportal.com</p>
            </div>
            <ul class="candidate-sidebar-nav">
              <li class="active">
                <a routerLink="/candidate/dashboard"><i class="fa-solid fa-gauge"></i> Dashboard</a>
              </li>
              <li>
                <a routerLink="/candidate/edit-profile"><i class="fa-solid fa-user-pen"></i> Edit Profile</a>
              </li>
              <li>
                <a routerLink="/candidate/build-resume"><i class="fa-solid fa-id-badge"></i> Build Resume</a>
              </li>
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

          <div class="candidate-main-content">
            <div class="row g-3 candidate-stats">
              <div class="col-6 col-md-3">
                <div class="candidate-stat-card stat-purple">
                  <div class="candidate-stat-icon">
                    <i class="fa-solid fa-eye"></i>
                  </div>
                  <div class="candidate-stat-info">
                    <span>Profile Views</span>
                    <strong>219</strong>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="candidate-stat-card stat-orange">
                  <div class="candidate-stat-icon">
                    <i class="fa-solid fa-user-plus"></i>
                  </div>
                  <div class="candidate-stat-info">
                    <span>Followings</span>
                    <strong>4</strong>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="candidate-stat-card stat-blue">
                  <div class="candidate-stat-icon">
                    <i class="fa-solid fa-file-lines"></i>
                  </div>
                  <div class="candidate-stat-info">
                    <span>My CV List</span>
                    <strong>1</strong>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="candidate-stat-card stat-teal">
                  <div class="candidate-stat-icon">
                    <i class="fa-solid fa-message"></i>
                  </div>
                  <div class="candidate-stat-info">
                    <span>Messages</span>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="candidate-cover-card">
              <div class="candidate-cover-media">
                <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/user-cover.jpg" alt="Workspace collaboration" />
              </div>
              <div class="candidate-cover-profile">
                <div class="candidate-cover-avatar">
                  <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/candidates/01.jpg" alt="Job Seeker" />
                </div>
                <div class="candidate-cover-info">
                  <h3>Job Seeker</h3>
                  <p>Bainbridge Island, Washington, United States of America</p>
                  <ul>
                    <li><i class="fa-solid fa-phone"></i> +1 234 567 890</li>
                    <li><i class="fa-solid fa-envelope"></i> seeker&#64;jobsportal.com</li>
                  </ul>
                </div>
              </div>
            </div>

            <section class="candidate-panel">
              <div class="candidate-panel-heading">
                <h3>My Applied Jobs</h3>
                <a href="#">View All</a>
              </div>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="candidate-applied-card">
                    <span class="candidate-badge-status">Full Time</span>
                    <h4>Project Manager</h4>
                    <p>Kaneboe Station</p>
                    <div class="candidate-applied-meta">
                      <span>Salary: USD5000 - USD6000/Monthly</span>
                      <span>Applied: Oct 31, 2025</span>
                    </div>
                    <div class="candidate-applied-footer">
                      <div><strong>Multimedia Design</strong></div>
                      <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo5.jpg" alt="Multimedia Design" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="candidate-applied-card">
                    <span class="candidate-badge-status">Full Time</span>
                    <h4>Full Stack Designer</h4>
                    <p>Barrington</p>
                    <div class="candidate-applied-meta">
                      <span>Salary: USD6000 - USD8000/Monthly</span>
                      <span>Applied: Oct 29, 2025</span>
                    </div>
                    <div class="candidate-applied-footer">
                      <div><strong>Connect People</strong></div>
                      <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo7.jpg" alt="Connect People" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="candidate-applied-card">
                    <span class="candidate-badge-status danger">Contract</span>
                    <h4>Full Stack Developer</h4>
                    <p>Bessemer</p>
                    <div class="candidate-applied-meta">
                      <span>Salary: USD10000 - USD20000/Monthly</span>
                      <span>Applied: Oct 25, 2025</span>
                    </div>
                    <div class="candidate-applied-footer">
                      <div><strong>Multimedia Design</strong></div>
                      <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo1.jpg" alt="Multimedia Design" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="candidate-panel">
              <div class="candidate-panel-heading">
                <h3>Active Package Details</h3>
              </div>
              <div class="candidate-package-grid">
                <div class="candidate-package-chip">
                  <span class="candidate-package-label">Package Name</span>
                  <strong>Basic Jobs View</strong>
                </div>
                <div class="candidate-package-chip">
                  <span class="candidate-package-label">Price</span>
                  <strong>USD 10</strong>
                </div>
                <div class="candidate-package-chip">
                  <span class="candidate-package-label">Applications</span>
                  <strong>02 / 20</strong>
                </div>
                <div class="candidate-package-chip">
                  <span class="candidate-package-label">Started On</span>
                  <strong>N/A</strong>
                </div>
                <div class="candidate-package-chip danger">
                  <span class="candidate-package-label">Expires On</span>
                  <strong>31 Dec, 2025</strong>
                </div>
              </div>
            </section>

            <section class="candidate-panel">
              <div class="candidate-panel-heading">
                <h3>Recommended Jobs</h3>
                <a href="#">View All</a>
              </div>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="candidate-recommended-card">
                    <span class="candidate-badge-status">Full Time</span>
                    <h4>UI/UX Designer</h4>
                    <p>Islamabad &middot; Power Color</p>
                    <div class="candidate-recommended-meta">
                      <span>Salary: $6000 - $9000/Monthly</span>
                      <span>Mar 07, 2025</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="candidate-recommended-card">
                    <span class="candidate-badge-status">Full Time</span>
                    <h4>iOS Developer</h4>
                    <p>Atlanta &middot; Multimedia Design</p>
                    <div class="candidate-recommended-meta">
                      <span>Salary: $6000 - $9000/Monthly</span>
                      <span>Mar 07, 2025</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="candidate-recommended-card">
                    <span class="candidate-badge-status danger">Contract</span>
                    <h4>Electrical Engineer</h4>
                    <p>Denver &middot; Power Wave</p>
                    <div class="candidate-recommended-meta">
                      <span>Salary: $5000 - $9000/Monthly</span>
                      <span>Mar 07, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="candidate-panel">
              <div class="candidate-panel-heading">
                <h3>My Followings</h3>
                <a href="#">View All</a>
              </div>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="candidate-following-card">
                    <div class="candidate-following-logo">
                      <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo1.jpg" alt="Web Design Studio" />
                    </div>
                    <h4>Web Design Studio</h4>
                    <p>Information Technology<br />Your Location Address USA</p>
                    <span>8 Open Jobs</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="candidate-following-card">
                    <div class="candidate-following-logo">
                      <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo5.jpg" alt="Multimedia Design" />
                    </div>
                    <h4>Multimedia Design</h4>
                    <p>Manufacturing<br />Your Location Address USA</p>
                    <span>5 Open Jobs</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="candidate-following-card">
                    <div class="candidate-following-logo">
                      <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo7.jpg" alt="Connect People" />
                    </div>
                    <h4>Connect People</h4>
                    <p>Technology Services<br />Your Location Address USA</p>
                    <span>5 Open Jobs</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class CandidateDashboardComponent {}
