import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-lg-6">
              <span class="hero-badge">Ready to Find Your Dream Job?</span>
              <h1 class="hero-title">Take the next step in your career journey.</h1>
              <p class="hero-copy">Explore opportunities that match your skills and passions, and land the job you've always wanted with JobsPortal.</p>
              <form class="hero-search" action="#." method="get">
                <div class="hero-search-fields">
                  <label class="hero-field">
                    <i class="fa fa-search"></i>
                    <input type="text" class="form-control" name="keyword" placeholder="Enter skills or job title">
                  </label>
                  <label class="hero-field select-field">
                    <i class="fa fa-map-marker"></i>
                    <select class="form-select" name="category">
                      <option value="">Select Category</option>
                      <option value="marketing">Marketing</option>
                      <option value="teaching">Teaching & Education</option>
                      <option value="design">Design</option>
                      <option value="development">Development</option>
                    </select>
                  </label>
                  <button type="submit" class="btn hero-submit" aria-label="Search jobs">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
              <div class="hero-actions d-flex flex-wrap align-items-center gap-3">
                <div class="hero-stat">
                  <span class="stat-value">50k+</span>
                  <span class="stat-label">Active Jobs</span>
                </div>
                <div class="hero-links d-flex gap-3">
                  <a href="#" class="hero-link"><i class="fa fa-briefcase"></i> Post Your Job</a>
                  <a href="#" class="hero-link"><i class="fa fa-user-o"></i> Search Jobs</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-visual">
                <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/hero-image.png" alt="Find a perfect job" class="img-fluid hero-image">
                <div class="hero-floating-card">
                  <span class="card-label">Find a Perfect Job</span>
                  <button type="button" class="btn btn-sm btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->

      <!-- Info Data Wrap -->
      <div class="infodatawrap">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <a href="javascript:void(0);" class="userloginbox">
                <h3>Search your desired Job</h3>
                <p>Discover a career you are passionate about</p>
                <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/icons/search-job-icon.png" alt="Search your desired Job">
              </a>
            </div>
            <div class="col-md-6">
              <a href="javascript:void(0);" class="userloginbox postjobbox">
                <h3>Post a Job Today</h3>
                <p>Discover the ideal candidate for your team</p>
                <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/icons/postjob.png" alt="Post a Job Today">
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Companies -->
      <section class="section company-section">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Here You Can See</div>
            <h3>Top Companies are Hiring</h3>
          </div>
          <div class="row g-4 company-grid">
            <div class="col-12 col-sm-6 col-lg-3" *ngFor="let company of companies">
              <a [routerLink]="['/company', company.name]" class="company-card">
                <div class="company-logo">
                  <img [src]="company.logo" [alt]="company.name">
                </div>
                <h5>{{ company.name }}</h5>
                <div class="company-meta">
                  <i class="fa fa-map-marker"></i> {{ company.location }}
                </div>
                <div class="company-openings">
                  <i class="fa fa-briefcase"></i> {{ company.openJobs }} Open Jobs
                </div>
              </a>
            </div>
          </div>
          <div class="company-viewall text-center">
            <a href="#" class="btn btn-primary">View All Featured Companies</a>
          </div>
        </div>
      </section>

      <!-- Categories -->
      <section class="section category-section">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Find Your Path</div>
            <h3>Browse Jobs By Categories</h3>
          </div>
          <div class="row g-4 category-grid">
            <div class="col-12 col-sm-6 col-lg-3" *ngFor="let cat of categories">
              <a href="javascript:void(0);" class="category-card">
                <div class="category-icon">
                  <img [src]="cat.image" [alt]="cat.name">
                </div>
                <h5>{{ cat.name }}</h5>
                <a href="javascript:void(0);" class="category-jobs"><i class="fa fa-briefcase"></i> ({{ cat.jobs }}) Jobs</a>
              </a>
            </div>
          </div>
          <div class="category-viewall text-center">
            <a href="#" class="btn btn-primary">View All Categories</a>
          </div>
        </div>
      </section>

      <!-- Industries -->
      <section class="section industries-section">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Explore Sectors</div>
            <h3>Popular Industries</h3>
          </div>
          <div class="industries-grid">
            <a *ngFor="let ind of industries" href="javascript:void(0);" class="industry-chip">
              <span class="chip-icon"><i [class]="'fa ' + ind.icon"></i></span>
              {{ ind.name }}
            </a>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="section howit-section">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Simple Steps</div>
            <h3>How It Works</h3>
          </div>
          <div class="row g-4 justify-content-center howit-grid">
            <div class="col-12 col-md-4">
              <div class="howit-card">
                <div class="howit-icon">
                  <i class="fa-solid fa-user-plus"></i>
                </div>
                <h4>Create An Account</h4>
                <p>It's very easy to open an account and start your journey.</p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="howit-card">
                <div class="howit-icon">
                  <i class="fa-solid fa-file"></i>
                </div>
                <h4>Complete your profile</h4>
                <p>Share all the key details so employers can get to know you.</p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="howit-card">
                <div class="howit-icon">
                  <i class="fa-solid fa-paper-plane"></i>
                </div>
                <h4>Apply job or hire</h4>
                <p>Apply to your preferred jobs or hire top talent effortlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Jobs -->
      <div class="section">
        <div class="container">
          <div class="titleTop">
            <div class="subtitle">Here You Can See</div>
            <h3>Featured <span>Jobs</span></h3>
          </div>
          <div class="row g-4 featured-jobs">
            <div class="col-12 col-md-6 col-lg-3" *ngFor="let job of featuredJobs">
              <div class="job-card">
                <div class="job-card-status">
                  <span class="job-card-status-icon"><i class="fa fa-briefcase"></i></span>
                  {{ job.type }}
                </div>
                <h4 class="job-card-title"><a href="#">{{ job.title }}</a></h4>
                <div class="job-card-location">
                  <i class="fa fa-map-marker"></i> {{ job.location }}
                </div>
                <div class="job-card-footer">
                  <div class="job-card-meta">
                    <span class="job-card-date">{{ job.posted }}</span>
                    <span class="job-card-company">{{ job.company }}</span>
                  </div>
                  <div class="job-card-logo">
                    <img [src]="job.logo" [alt]="job.company">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="category-viewall text-center">
            <a routerLink="/jobs-list" class="btn btn-primary">View All Featured Jobs</a>
          </div>
        </div>
      </div>

      <!-- Video Section -->
      <section class="section video-section-v2">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <div class="video-content-v2">
                <span class="video-badge-v2">Here You Can See</span>
                <h2 class="video-title-v2">Watch Our <span class="video-highlight-v2">Video</span></h2>
                <p class="video-text-v2">Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet.</p>
                <ul class="video-features-v2">
                  <li><i class="fa fa-check-circle"></i> Learn about our platform</li>
                  <li><i class="fa fa-check-circle"></i> Discover success stories</li>
                  <li><i class="fa fa-check-circle"></i> See how it works</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="video-wrapper-v2">
                <div class="video-thumbnail-v2">
                  <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/video-thumbnail.jpg" alt="Video thumbnail" class="video-image-v2">
                  <div class="video-overlay-v2"></div>
                  <button class="video-play-btn-v2" type="button" aria-label="Play video">
                    <div class="play-btn-circle-v2">
                      <i class="fa fa-play"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Jobs -->
      <div class="section greybg">
        <div class="container">
          <div class="titleTop">
            <div class="subtitle">Here You Can See</div>
            <h3>Latest <span>Jobs</span></h3>
          </div>
          <div class="row g-4 latest-jobs">
            <div class="col-12 col-md-6 col-lg-4" *ngFor="let job of latestJobs">
              <div class="latest-job-card">
                <div class="latest-job-header">
                  <span class="badge badge-status" [class]="job.type.toLowerCase().replace(' ', '')">{{ job.type }}</span>
                  <a href="#" class="bookmark"><i class="fa fa-heart-o"></i></a>
                </div>
                <h4><a href="#">{{ job.title }}</a></h4>
                <div class="latest-job-meta">
                  <span><i class="fa fa-building"></i> {{ job.company }}</span>
                  <span><i class="fa fa-map-marker"></i> {{ job.location }}</span>
                </div>
                <div class="latest-job-footer">
                  <div class="latest-job-company">
                    <img [src]="job.logo" alt="Company logo">
                    <div>
                      <span class="label">Posted on</span>
                      <span class="value">{{ job.posted }}</span>
                    </div>
                  </div>
                  <a href="#" class="btn btn-outline-primary btn-sm">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Jobs by Cities -->
      <section class="section city-section">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Choose Your Location</div>
            <h3>Jobs by Cities</h3>
          </div>
          <div class="row g-4 city-grid">
            <div class="col-12 col-sm-6 col-lg-3" *ngFor="let city of cities">
              <a href="javascript:void(0);" class="city-card">
                <img [src]="city.image" [alt]="city.name" class="city-image">
                <div class="city-overlay">
                  <span class="city-name">{{ city.name }}</span>
                  <span class="city-jobs">{{ city.jobs }} Jobs</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="section">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Stories from our community</div>
            <h3>Success Stories</h3>
          </div>
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3" *ngFor="let t of testimonials">
              <div class="testimonial-card">
                <p class="text-muted mb-4 fst-italic">"{{ t.text }}"</p>
                <div class="d-flex align-items-center gap-3 pt-3 border-top">
                  <img [src]="t.avatar" [alt]="t.name" class="rounded-circle" style="width:48px;height:48px;object-fit:cover;">
                  <div>
                    <div class="fw-bold">{{ t.name }}</div>
                    <small class="text-muted">{{ t.role }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- App Section -->
      <section class="section app-section">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <div class="app-content">
                <h2 class="app-title">The JobsPortal APP</h2>
                <p class="app-subtitle">A world of oppertunity in your hand</p>
                <p class="app-text">Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non, semper orci. Curabitur blandit, diam ut ornare ultricies.</p>
                <div class="app-buttons">
                  <a href="#" class="app-btn">
                    <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/apple-btn.png" alt="Apple Store">
                  </a>
                  <a href="#" class="app-btn">
                    <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/andriod-btn.png" alt="Google Play">
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="app-image">
                <img src="https://www.sharjeelanjum.com/html/jobs-portal/images/app-screens.png" alt="App Screens" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Subscribe -->
      <section class="section subscribe-section">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Stay in the loop</div>
            <h3>Subscribe To Our Newsletter</h3>
            <p class="subscribe-text">Get the latest jobs, hiring trends, and tips delivered directly to your inbox.</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <form class="subscribe-form d-flex gap-2">
                <input type="email" class="form-control" placeholder="Enter your email">
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </form>
              <p class="privacy-text mt-2 text-center">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog -->
      <section class="section greybg">
        <div class="container">
          <div class="titleTop text-center">
            <div class="subtitle">Our Blog</div>
            <h3>Latest <span>Blog Posts</span></h3>
          </div>
          <div class="row g-4">
            <div class="col-12 col-md-4" *ngFor="let blog of blogs">
              <div class="blog-card">
                <div class="blog-image">
                  <img [src]="blog.image" [alt]="blog.title" class="img-fluid">
                  <span class="blog-category">{{ blog.category }}</span>
                </div>
                <div class="blog-content">
                  <div class="blog-meta mb-2">
                    <span><i class="fa fa-calendar"></i> {{ blog.date }}</span>
                    <span><i class="fa fa-user"></i> {{ blog.author }}</span>
                  </div>
                  <h5><a href="#">{{ blog.title }}</a></h5>
                  <p class="text-muted mb-3">{{ blog.excerpt }}</p>
                  <a href="#" class="btn btn-outline-primary btn-sm">Read article</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:400,400i,600,700&display=swap');

    /* Base */
    :host {
      display: block;
      font-family: 'Open Sans', sans-serif;
    }
    
    /* Hero Section */
    .hero-section {
      position: relative;
      padding: 120px 0;
      background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0) 45%),
        linear-gradient(135deg, #f0f9ff 0%, #f0fff4 45%, #ffffff 100%);
    }
    
    .hero-badge {
      display: inline-block;
      padding: 6px 18px;
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: #047857;
      background: rgba(34, 197, 94, 0.12);
      border-radius: 999px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    
    .hero-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 16px;
      line-height: 1.1;
    }
    
    .hero-copy {
      font-size: 1.05rem;
      color: #475569;
      margin-bottom: 32px;
      max-width: 540px;
    }
    
    .hero-search {
      background: #ffffff;
      border-radius: 18px;
      padding: 14px;
      box-shadow: 0 24px 55px rgba(15, 23, 42, 0.12);
      margin-bottom: 30px;
    }
    
    .hero-search-fields {
      display: flex;
      align-items: stretch;
      gap: 12px;
    }
    
    .hero-field {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 10px 16px;
      background: #f8fafc;
      border-radius: 12px;
      border: 1px solid transparent;
    }
    
    .hero-field i {
      color: #64748b;
      font-size: 1rem;
    }
    
    .hero-field .form-control, .hero-field .form-select {
      border: none;
      background: transparent;
      box-shadow: none;
      font-size: 0.95rem;
      color: #1f2937;
    }
    
    .hero-field .form-control::placeholder {
      color: #94a3b8;
    }
    
    .hero-field:focus-within {
      background: #ffffff;
      border-color: rgba(37, 99, 235, 0.35);
    }
    
    .hero-submit {
      border-radius: 12px;
      background: #22c55e;
      border-color: #22c55e;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 22px;
      font-size: 1.1rem;
      box-shadow: 0 12px 25px rgba(34, 197, 94, 0.25);
    }
    
    .hero-submit:hover {
      background: #16a34a;
      border-color: #16a34a;
    }
    
    .hero-actions {
      margin-top: 16px;
    }
    
    .hero-stat {
      background: #ecfeff;
      border-radius: 18px;
      padding: 14px 20px;
      display: inline-flex;
      flex-direction: column;
      min-width: 120px;
      box-shadow: inset 0 0 0 1px rgba(14, 165, 233, 0.28);
    }
    
    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0ea5e9;
      line-height: 1.1;
    }
    
    .stat-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: #0f172a;
    }
    
    .hero-links {
      display: inline-flex;
      align-items: center;
    }
    
    .hero-link {
      font-weight: 600;
      color: #2563eb;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
    
    .hero-link i {
      color: #22c55e;
    }
    
    .hero-link:hover {
      color: #1d4ed8;
    }
    
    .hero-visual {
      position: relative;
      margin-left: auto;
    }
    
    .hero-image {
      width: 100%;
      max-width: 500px;
    }
    
    .hero-floating-card {
      position: absolute;
      left: 12%;
      bottom: -30px;
      background: #ffffff;
      border-radius: 20px;
      padding: 18px 20px;
      box-shadow: 0 20px 50px rgba(15, 23, 42, 0.18);
      display: flex;
      align-items: center;
      gap: 16px;
    }
    
    .card-label {
      font-weight: 700;
      color: #0f172a;
    }
    
    .hero-floating-card .btn {
      border-radius: 999px;
      padding: 8px 18px;
      font-weight: 600;
      background: #2563eb;
      border-color: #2563eb;
    }
    
    /* Info Box */
    .infodatawrap {
      padding-top: 40px;
    }
    
    .userloginbox {
      background: #0357e9;
      padding: 30px 40px;
      padding-right: 110px;
      display: block;
      border-radius: 100px;
      color: #fff;
      position: relative;
      text-decoration: none;
    }
    
    .userloginbox:hover {
      background: #6803e9;
      color: #fff;
    }
    
    .userloginbox.postjobbox {
      background: #17d27c;
    }
    
    .userloginbox img {
      position: absolute;
      right: 30px;
      top: 50%;
      width: 70px;
      margin-top: -35px;
    }
    
    .userloginbox h3 {
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    .userloginbox p {
      font-size: 14px;
      color: #fff;
    }
    
    /* Section */
    .section {
      padding: 50px 0;
      overflow: hidden;
    }
    
    .greybg {
      background: #f6f6f6;
    }
    
    .titleTop {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .titleTop .subtitle {
      font-size: 18px;
      font-weight: 600;
      color: #17d27c;
      margin-bottom: 5px;
    }
    
    .titleTop h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 36px;
      font-weight: 600;
      color: #000;
    }
    
    .titleTop h3 span {
      color: #263bd6;
      font-weight: 200;
    }
    
    /* Company Section */
    .company-section {
      padding: 80px 0;
    }
    
    .company-card {
      background: #ffffff;
      border-radius: 18px;
      padding: 32px 24px;
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
      border: 1px solid rgba(148, 163, 184, 0.15);
      text-align: center;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .company-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
    }
    
    .company-logo {
      width: 72px;
      height: 72px;
      border-radius: 16px;
      background: #f8fafc;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
    }
    
    .company-logo img {
      width: 52px;
      height: 52px;
      object-fit: contain;
    }
    
    .company-card h5 {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.05rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0;
    }
    
    .company-meta {
      font-size: 0.9rem;
      color: #64748b;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .company-meta i {
      color: #22c55e;
    }
    
    .company-openings {
      font-size: 0.92rem;
      font-weight: 600;
      color: #1f2937;
      background: rgba(37, 99, 235, 0.08);
      border-radius: 12px;
      padding: 8px 16px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    
    .company-openings i {
      color: #2563eb;
    }
    
    .company-viewall {
      margin-top: 40px;
    }
    
    .company-viewall .btn {
      min-width: 260px;
      padding: 14px 26px;
      border-radius: 999px;
      box-shadow: 0 18px 35px rgba(37, 99, 235, 0.25);
      font-weight: 600;
      background: #2563eb;
      border-color: #2563eb;
    }
    
    /* Industries */
    .industries-section {
      padding: 80px 0;
      background: #ffffff;
    }
    
    .industries-grid {
      margin-top: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
    }
    
    .industry-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 999px;
      background: rgba(37, 99, 235, 0.08);
      color: #1d4ed8;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s ease, color 0.2s ease;
    }
    
    .industry-chip .chip-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #ffffff;
      color: inherit;
      box-shadow: 0 5px 12px rgba(37, 99, 235, 0.15);
    }
    
    .industry-chip:hover {
      background: #2563eb;
      color: #ffffff;
    }
    
    .industry-chip:hover .chip-icon {
      color: #2563eb;
      background: #f8fafc;
    }
    
    /* Video Section */
    .video-section-v2 {
      padding: 50px 0;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
    
    .video-badge-v2 {
      display: inline-block;
      background: #dcfce7;
      color: #16a34a;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    
    .video-title-v2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 36px;
      font-weight: 600;
      color: #000;
      margin-bottom: 16px;
    }
    
    .video-highlight-v2 {
      color: #263bd6;
    }
    
    .video-text-v2 {
      color: #555;
      margin-bottom: 24px;
    }
    
    .video-features-v2 {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .video-features-v2 li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      color: #333;
    }
    
    .video-features-v2 li i {
      color: #17d27c;
    }
    
    .video-thumbnail-v2 {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
    }
    
    .video-image-v2 {
      width: 100%;
    }
    
    .video-overlay-v2 {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.3);
    }
    
    .video-play-btn-v2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      border: none;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    
    .play-btn-circle-v2 {
      width: 50px;
      height: 50px;
      background: #17d27c;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .play-btn-circle-v2 i {
      color: white;
      margin-left: 4px;
    }
    
    /* Latest Jobs */
    .latest-job-card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      transition: all 0.3s;
    }
    
    .latest-job-card:hover {
      box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    }
    
    .latest-job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    
    .badge-status {
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 4px;
      font-weight: 600;
    }
    
    .badge-status.fulltime { background: #dcfce7; color: #166534; }
    .badge-status.freelance { background: #fef3c7; color: #92400e; }
    .badge-status.parttime { background: #dbeafe; color: #1e40af; }
    .badge-status.contract { background: #e0e7ff; color: #3730a3; }
    .badge-status.internship { background: #fce7f3; color: #9d174d; }
    .badge-status.remote { background: #ede9fe; color: #5b21b6; }
    
    .bookmark {
      color: #9ca3af;
      text-decoration: none;
    }
    
    .latest-job-card h4 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    .latest-job-card h4 a {
      color: #1f2937;
      text-decoration: none;
    }
    
    .latest-job-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 13px;
      color: #6b7280;
      margin-bottom: 16px;
    }
    
    .latest-job-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
    }
    
    .latest-job-company {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .latest-job-company img {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      object-fit: cover;
    }
    
    .latest-job-company .label {
      font-size: 11px;
      color: #9ca3af;
      display: block;
    }
    
    .latest-job-company .value {
      font-size: 12px;
      color: #1f2937;
      font-weight: 600;
    }
    
    /* City Section */
    .city-section {
      padding: 50px 0;
    }
    
    .city-card {
      position: relative;
      display: block;
      border-radius: 12px;
      overflow: hidden;
      text-decoration: none;
    }
    
    .city-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .city-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
    }
    
    .city-name {
      display: block;
      font-size: 18px;
      font-weight: 700;
    }
    
    .city-jobs {
      font-size: 14px;
      opacity: 0.9;
    }
    
    /* Testimonials */
    .testimonial-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      height: 100%;
    }
    
    /* App Section */
    .app-section {
      padding: 50px 0;
      background: linear-gradient(135deg, #17d27c 0%, #0ea5e9 100%);
    }
    
    .app-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 36px;
      font-weight: 700;
      color: white;
      margin-bottom: 8px;
    }
    
    .app-subtitle {
      font-size: 20px;
      color: rgba(255,255,255,0.9);
      margin-bottom: 16px;
    }
    
    .app-text {
      color: rgba(255,255,255,0.8);
      margin-bottom: 24px;
    }
    
    .app-buttons {
      display: flex;
      gap: 16px;
    }
    
    .app-btn img {
      height: 50px;
      border-radius: 8px;
    }
    
    .app-image img {
      width: 100%;
    }
    
    /* Subscribe Section */
    .subscribe-section {
      padding: 50px 0;
      background: white;
    }
    
    .subscribe-text {
      color: #444;
      margin-bottom: 24px;
    }
    
    .subscribe-form input {
      padding: 14px 20px;
      border-radius: 50px;
      border: 1px solid #ddd;
    }
    
    .subscribe-form .btn {
      padding: 14px 30px;
      border-radius: 50px;
      background: #17d27c;
      border-color: #17d27c;
    }
    
    .subscribe-form .btn:hover {
      background: #17a858;
      border-color: #17a858;
    }
    
    .privacy-text {
      font-size: 13px;
      color: #999;
    }
    
    /* Blog */
    .blog-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      transition: all 0.3s;
    }
    
    .blog-card:hover {
      box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    }
    
    .blog-image {
      height: 200px;
      overflow: hidden;
      position: relative;
    }
    
    .blog-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .blog-category {
      position: absolute;
      top: 16px;
      left: 16px;
      background: #17d27c;
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
    
    .blog-content {
      padding: 20px;
    }
    
    .blog-meta {
      font-size: 12px;
      color: #999;
    }
    
    .blog-meta span {
      margin-right: 16px;
    }
    
    .blog-card h5 {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    .blog-card h5 a {
      color: #1f2937;
      text-decoration: none;
    }

    /* Buttons */
    .btn-primary {
      background: #2563eb;
      border-color: #2563eb;
    }
    
    .btn-primary:hover {
      background: #1d4ed8;
      border-color: #1d4ed8;
    }
    
    .btn-outline-primary {
      color: #17d27c;
      border-color: #17d27c;
    }
    
    .btn-outline-primary:hover {
      background: #17d27c;
      border-color: #17d27c;
    }

    @media (max-width: 991px) {
      .hero-section { padding: 80px 0; }
      .hero-title { font-size: 2.4rem; }
      .hero-search { border-radius: 16px; }
      .hero-search-fields { flex-direction: column; }
      .hero-field { width: 100%; }
      .hero-submit { width: 100%; padding: 14px; }
      .hero-visual { margin: 40px auto 0; }
      .hero-floating-card { left: 50%; transform: translateX(-50%); bottom: -24px; }
    }
  `]
})
export class HomePageComponent {
  companies = [
    { name: 'Multimedia Design', location: 'United States of America', openJobs: 5, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo1.jpg' },
    { name: 'Power Wave', location: 'United States of America', openJobs: 2, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo2.jpg' },
    { name: 'Travel Advisor', location: 'United States of America', openJobs: 0, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo3.jpg' },
    { name: 'New Design Studio', location: 'United States of America', openJobs: 1, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo4.jpg' },
    { name: 'Net Design', location: 'United States of America', openJobs: 1, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo5.jpg' },
    { name: 'Power Color', location: 'United States of America', openJobs: 2, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo6.jpg' },
    { name: 'Connect People', location: 'United States of America', openJobs: 2, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo7.jpg' },
    { name: 'Surf Wave', location: 'United States of America', openJobs: 1, logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo8.jpg' },
  ];

  industries = [
    { name: 'Manufacturing (5)', icon: 'fa-industry' },
    { name: 'Fashion (2)', icon: 'fa-female' },
    { name: 'Electronics (2)', icon: 'fa-plug' },
    { name: 'Advertising/PR (2)', icon: 'fa-bullhorn' },
    { name: 'Information Technology (2)', icon: 'fa-desktop' },
    { name: 'Courier/Logistics (1)', icon: 'fa-truck' },
    { name: 'Automobile (1)', icon: 'fa-car' },
    { name: 'Education/Training (1)', icon: 'fa-graduation-cap' },
    { name: 'Banking/Financial Services (1)', icon: 'fa-university' },
    { name: 'Health & Fitness (1)', icon: 'fa-heartbeat' },
  ];

  cities = [
    { name: 'Atlanta', jobs: 18, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/cities/atlanta.jpg' },
    { name: 'Barrington', jobs: 9, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/cities/barrington.jpg' },
    { name: 'Durant', jobs: 12, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/cities/durant.jpg' },
    { name: 'Bessemer', jobs: 6, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/cities/bessemer.jpg' },
  ];

  latestJobs = [
    { type: 'Full Time', title: 'Technical Database Engineer', company: 'Datebase Management Co', location: 'New York', posted: 'Mar 07, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo1.jpg' },
    { type: 'Freelance', title: 'Front-end Developer', company: 'Creative Studio', location: 'Boston', posted: 'Mar 05, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo11.jpg' },
    { type: 'Part Time', title: 'Product Designer', company: 'Bright Agency', location: 'Chicago', posted: 'Mar 04, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo12.jpg' },
    { type: 'Freelance', title: 'Mobile Developer', company: 'Appify Labs', location: 'Remote', posted: 'Mar 02, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo13.jpg' },
    { type: 'Full Time', title: 'Senior UX Researcher', company: 'Insights Co.', location: 'San Francisco', posted: 'Feb 28, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo14.jpg' },
    { type: 'Full Time', title: 'Systems Administrator', company: 'Sphere Networks', location: 'Austin', posted: 'Feb 26, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo15.jpg' },
    { type: 'Part Time', title: 'Social Media Strategist', company: 'Connect Agency', location: 'Denver', posted: 'Feb 25, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo16.jpg' },
    { type: 'Remote', title: 'Support Engineer', company: 'Helpline Inc.', location: 'Remote', posted: 'Feb 23, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo2.jpg' },
    { type: 'Full Time', title: 'Backend Engineer', company: 'Rapid Systems', location: 'Phoenix', posted: 'Feb 22, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo3.jpg' },
  ];

  testimonials = [
    { name: 'Samantha Lee', role: 'Product Designer, Bright Labs', text: 'JobsPortal helped me land my dream role within weeks. The process was clean, seamless, and the support team was always ready to assist.', avatar: 'https://www.sharjeelanjum.com/html/jobs-portal/images/testimonials/user1.jpg' },
    { name: 'Michael Robinson', role: 'HR Manager, SphereTech', text: 'As an employer, we found top talent faster than ever before. The platform makes publishing jobs and managing applicants incredibly simple.', avatar: 'https://www.sharjeelanjum.com/html/jobs-portal/images/testimonials/user2.jpg' },
    { name: 'Priya Patel', role: 'Software Engineer, Connect People', text: 'I appreciate the curated job recommendations and the ability to connect directly with companies that align with my values.', avatar: 'https://www.sharjeelanjum.com/html/jobs-portal/images/testimonials/user3.jpg' },
    { name: 'Liam Carter', role: 'Founder, Appify Labs', text: 'We scaled our hiring pipeline dramatically thanks to JobsPortal\'s reach and user-friendly tools.', avatar: 'https://www.sharjeelanjum.com/html/jobs-portal/images/testimonials/user4.jpg' },
  ];

  blogs = [
    { title: 'How to design a candidate experience that actually converts', category: 'Hiring', date: '17 Sep', author: 'Samira Hodge', excerpt: 'From first touch to offer, here\'s the messaging stack and automation playbook we use to keep talent engaged.', image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/blog/1.jpg' },
    { title: '7 rituals our leadership team uses to stay aligned remotely', category: 'Leadership', date: '15 Sep', author: 'Devon Marks', excerpt: 'Weekly dashboards, async standups, and lightweight rituals that keep strategic bets on track.', image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/blog/2.jpg' },
    { title: 'Inside the onboarding sprint that ramps new hires in 10 days', category: 'Culture', date: '12 Sep', author: 'Lily Ortega', excerpt: 'A look at how we bundle product education, values training, and buddy systems into a cohesive journey.', image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/blog/3.jpg' },
  ];

  categories = [
    { name: 'Business Management', jobs: 2, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/categories/business-management.png' },
    { name: 'Information Technology', jobs: 1, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/categories/it.png' },
    { name: 'Software & Web Development', jobs: 1, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/categories/developer.png' },
    { name: 'Electronics Technician', jobs: 1, image: 'https://www.sharjeelanjum.com/html/jobs-portal/images/categories/electrician.png' },
  ];

  featuredJobs = [
    { type: 'Full Time/Permanent', title: 'Full Stack Designer', company: 'Connect People', location: 'Barrington', posted: 'Mar 07, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo7.jpg' },
    { type: 'Part Time', title: 'Marketing Specialist', company: 'Power Wave', location: 'New York', posted: 'Mar 10, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo2.jpg' },
    { type: 'Freelance', title: 'UI Engineer', company: 'Design Studio', location: 'Los Angeles', posted: 'Mar 12, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo4.jpg' },
    { type: 'Contract', title: 'Data Analyst', company: 'Sphere Tech', location: 'Chicago', posted: 'Mar 15, 2025', logo: 'https://www.sharjeelanjum.com/html/jobs-portal/images/employers/emplogo9.jpg' },
  ];
}
