/* ============================================================
   SHARED COMPONENTS — Header & Footer
   ============================================================ */
(function () {

  const headerHTML = `
  <header id="header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="logo">
          <div class="logo-icon">VV</div>
          <div class="logo-text">
            <strong>Vidya Vihar International</strong>
            <span>Excellence in Education</span>
          </div>
        </a>
        <nav id="main-nav">
          <a href="index.html" class="nav-link">Home</a>
          <div class="has-dropdown">
            <a href="about.html" class="nav-link">About &#9662;</a>
            <div class="dropdown">
              <a href="about.html">About Us</a>
              <a href="about.html#vision">Vision &amp; Mission</a>
              <a href="about.html#committee">School Committee</a>
              <a href="about.html#heads">Leadership</a>
            </div>
          </div>
          <div class="has-dropdown">
            <a href="admissions.html" class="nav-link">Admissions &#9662;</a>
            <div class="dropdown">
              <a href="admissions.html">Admissions</a>
              <a href="admissions.html#procedure">Procedure</a>
              <a href="admissions.html#form">Apply Now</a>
              <a href="nios.html">NIOS Program</a>
            </div>
          </div>
          <div class="has-dropdown">
            <a href="gallery.html" class="nav-link">School Life &#9662;</a>
            <div class="dropdown">
              <a href="gallery.html">Photo Gallery</a>
              <a href="events.html">Events</a>
            </div>
          </div>
          <a href="contact.html" class="nav-link">Contact</a>
        </nav>
        <div class="header-actions">
          <a href="admissions.html#form" class="btn-admissions">Admissions Open</a>
          <div class="login-dropdown-wrap">
            <button class="login-trigger">Login &#9662;</button>
            <div class="login-menu">
              <a href="#"><span class="icon">&#128100;</span> Parent Login</a>
              <a href="#"><span class="icon">&#127891;</span> Student Login</a>
              <a href="#"><span class="icon">&#128104;</span> Teacher Login</a>
              <a href="#"><span class="icon">&#9881;</span> Admin Login</a>
            </div>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </header>`;

  const socialHTML = `
  <div class="social-sidebar">
    <a href="#" class="wa" title="WhatsApp" style="font-size:0.72rem;font-weight:900;letter-spacing:0">WA</a>
    <a href="#" class="fb" title="Facebook" style="font-size:0.72rem;font-weight:900;">FB</a>
    <a href="#" class="ig" title="Instagram" style="font-size:0.72rem;font-weight:900;">IG</a>
    <a href="#" class="yt" title="YouTube" style="font-size:0.72rem;font-weight:900;">YT</a>
    <a href="#" class="li" title="LinkedIn" style="font-size:0.72rem;font-weight:900;">IN</a>
  </div>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">

      <!-- ROW 1: Brand + Map -->
      <div class="footer-row1">
        <div class="footer-brand">
          <div class="footer-brand-logo">
            <div class="footer-brand-icon">VV</div>
            <div class="footer-brand-name">
              <strong>Vidya Vihar International School</strong>
              <span>Excellence in Education Since 2005</span>
            </div>
          </div>
          <p class="footer-brand-desc">Providing quality education that nurtures young minds, builds character, and prepares students for a dynamic global future. Affiliated with CBSE | Estd. 2005.</p>
          <div class="footer-social-row">
            <a href="#" title="Facebook">FB</a>
            <a href="#" title="Instagram">IG</a>
            <a href="#" title="YouTube">YT</a>
            <a href="#" title="LinkedIn">IN</a>
            <a href="#" title="WhatsApp">WA</a>
          </div>
        </div>
        <div class="footer-map-wrap">
          <iframe src="https://maps.google.com/maps?q=school+bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen loading="lazy" title="School Location Map"></iframe>
        </div>
      </div>

      <!-- ROW 2: 4 columns -->
      <div class="footer-row2">
        <div>
          <div class="footer-col-title">Quick Links</div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="admissions.html">Admissions</a></li>
            <li><a href="nios.html">NIOS Program</a></li>
            <li><a href="gallery.html">Photo Gallery</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="disclosure.html">Public Disclosure</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Academic</div>
          <ul class="footer-links">
            <li><a href="#">Pre-Primary</a></li>
            <li><a href="#">Primary School</a></li>
            <li><a href="#">Middle School</a></li>
            <li><a href="#">High School</a></li>
            <li><a href="#">Academic Calendar</a></li>
            <li><a href="#">Curriculum</a></li>
            <li><a href="#">Clubs &amp; Activities</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">School Life</div>
          <ul class="footer-links">
            <li><a href="#">Student Council</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Arts &amp; Culture</a></li>
            <li><a href="#">STEM / MakerSpace</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partner With Us</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Contact Us</div>
          <div class="footer-contact-list">
            <div class="footer-contact-row">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>123 Education Lane,<br>Knowledge Nagar, City &mdash; 400001</span>
            </div>
            <div class="footer-contact-row">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>+91 98765 43210<br>+91 22 1234 5678</span>
            </div>
            <div class="footer-contact-row">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>info@vidyavihar.edu.in<br>admissions@vidyavihar.edu.in</span>
            </div>
            <div class="footer-contact-row">
              <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
              <span>Mon &ndash; Sat: 8:00 AM &ndash; 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ROW 3: Newsletter -->
      <div class="footer-row3">
        <div class="footer-nl-text">
          <h5>Stay Updated</h5>
          <p>Get school news, events &amp; announcements in your inbox</p>
        </div>
        <div class="footer-nl-form">
          <div class="nl-input-wrap">
            <input type="email" placeholder="Enter your email address" aria-label="Newsletter email">
            <button type="button" onclick="subscribeNewsletter(this)">Subscribe</button>
          </div>
        </div>
      </div>

      <!-- ROW 4: Legal -->
      <div class="footer-row4">
        <span>CBSE Affiliation No: 123456 &nbsp;|&nbsp; School Code: 78901 &nbsp;|&nbsp; &copy; 2025 Vidya Vihar International School</span>
        <div>
          <a href="disclosure.html">Mandatory Public Disclosure</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
        </div>
      </div>

    </div>
    <div class="footer-copyright">
      Designed with care for Excellence in Education &nbsp;&mdash;&nbsp; All rights reserved.
    </div>
  </footer>
  <button class="scroll-top" title="Back to top">&#8679;</button>`;

  const body = document.body;
  body.insertAdjacentHTML('afterbegin', headerHTML + socialHTML);
  body.insertAdjacentHTML('beforeend', footerHTML);

})();

function subscribeNewsletter(btn) {
  const input = btn.closest('.nl-input-wrap').querySelector('input');
  if (!input || !input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    if (input) { input.style.outline = '2px solid #e74c3c'; setTimeout(() => input.style.outline = '', 2000); }
    return;
  }
  btn.textContent = 'Subscribed!';
  btn.style.background = '#27ae60';
  input.value = '';
  setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
}
