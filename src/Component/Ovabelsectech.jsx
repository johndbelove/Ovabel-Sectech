import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Ovabelsectech.css";
import logoimg from "../assets/ovabel-sectech-logo.jpg";


const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionIds = {
      "/": "home",
      "/about": "about",
      "/services": "services",
      "/contact": "contact",
    };
    const section = document.getElementById(sectionIds[pathname] || "home");
    section?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Ovabel Sectech home">
          <img src={logoimg} alt="Ovabel Sectech eagle and crown logo" />
          <span>OVABEL <b>SECTECH</b></span>
        </Link>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          ☰
        </button>

        <nav className="main-nav" id="mainNav">
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact us</Link>
          <Link className="button button-gold nav-login" to="/account">Login / Register</Link>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/security-motion-poster.jpg"
          >
            <source src="/assets/security-motion.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade"></div>
          <div className="hero-content">
            <span className="eyebrow"><i></i> SMARTER PROTECTION. GREATER PEACE OF MIND.</span>
            <h1>Welcome to <span>Ovabel Sectech</span></h1>
            <p className="hero-line">Redefine excellence in security system.</p>
            <p className="hero-copy">Advanced protection for your people, property, business and everything that matters.</p>
            <Link className="button button-gold" to="/account">Get started <span>↗</span></Link>
          </div>
          <div className="hero-bottom"><span>PROTECTING WHAT MATTERS</span><span>01 / 03</span></div>
          <div className="scroll-cue"><span></span> SCROLL TO EXPLORE</div>
        </section>

        <section className="trust-strip" aria-label="Our focus">
          <div><strong>01</strong><span>People-first protection</span></div>
          <div><strong>02</strong><span>Smart security technology</span></div>
          <div><strong>03</strong><span>Integrated security solutions</span></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-kicker">WHO WE ARE <span></span></div>
          <div className="about-grid">
            <div>
              <h2>Security that moves<br /><em>life forward.</em></h2>
              <p className="lead">Ovabel Sectech was born out of sheer concern to advance the security system of individuals, environments, businesses, properties and more—for safer and more productive results across every sphere of living.</p>
            </div>
            <div className="about-card">
              <div className="card-mark">O<span>S</span></div>
              <h3>Protection with purpose.</h3>
              <p>Ovabel Sectech is a multifaceted firm that offers advanced, state-of-the-art products and services covering a wide security structure.</p>
              <Link to="/services" className="text-link">Explore what we do <span>→</span></Link>
            </div>
          </div>
          <div className="about-foot"><span>OVABEL SECTECH</span><span>ADVANCED SECURITY • SMARTER LIVING</span></div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-kicker">WHAT WE OFFER <span></span></div>
          <div className="section-heading">
            <div><h2>One partner.<br /><em>Many layers of security.</em></h2></div>
            <p>From on-ground personnel to connected devices, explore security solutions designed around your needs.</p>
          </div>
          <div className="service-columns">
            <div className="service-group">
              <div className="group-heading"><span>01 / SERVICES</span><h3>Security services</h3></div>
              <article className="service-item"><span className="service-icon">◆</span><div><h4>Ultra-modern security car services</h4><p>Coordinated mobility and security support for approved assignments.</p></div></article>
              <article className="service-item"><span className="service-icon">⌖</span><div><h4>Information sourcing &amp; personal monitoring</h4><p>Discreet information support and monitoring services within agreed legal and privacy boundaries.</p></div></article>
              <article className="service-item"><span className="service-icon">✦</span><div><h4>Occasion security management</h4><p>Event security coordination with professional bouncers and ushers.</p></div></article>
              <article className="service-item"><span className="service-icon">⬡</span><div><h4>VIP security protection</h4><p>Personal protection planning and security support for VIP clients.</p></div></article>
            </div>

            <div className="service-group product-group">
              <div className="group-heading"><span>02 / PRODUCTS</span><h3>Smart security products</h3></div>
              <article className="service-item"><span className="service-icon">◉</span><div><h4>Ovabel Sectech security cameras</h4><p>Camera solutions for homes and offices.</p></div></article>
              <article className="service-item"><span className="service-icon">◒</span><div><h4>Ovabel Eagle Eye glasses</h4><p>Wearable camera glasses for video, audio and photo capture—with clear notice and consent.</p></div></article>
              <article className="service-item"><span className="service-icon">✎</span><div><h4>Ovabel Sectech pen</h4><p>Audio-recording pen for lawful, consent-based note-taking and documentation.</p></div></article>
              <article className="service-item"><span className="service-icon">▣</span><div><h4>Ovabel Sectech body cam</h4><p>Body-worn camera technology for transparent security monitoring.</p></div></article>
              <article className="service-item"><span className="service-icon">◷</span><div><h4>Ovabel Sectech wristwatch</h4><p>Location-enabled wearable with audio/video features where legally permitted.</p></div></article>
              <article className="service-item"><span className="service-icon">⌁</span><div><h4>Advanced monitoring chip</h4><p>Tracking solutions for vehicles and compatible electronic appliances.</p></div></article>
            </div>
          </div>
          <div className="service-cta">
            <p>Looking for a tailored security solution?</p>
            <Link className="button button-dark" to="/contact">Talk to our team <span>↗</span></Link>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-kicker">LET'S CONNECT <span></span></div>
          <div className="contact-grid">
            <div className="contact-intro">
              <h2>Let's make<br /><em>security personal.</em></h2>
              <p>Tell us what you need protected. Our team will be glad to hear from you and discuss a suitable solution.</p>
              <div className="contact-email">
                <span>EMAIL OUR SUPPORT TEAM</span>
                <a href="mailto:support@ovabelsectech.com">support@ovabelsectech.com ↗</a>
              </div>
            </div>

            <form className="contact-form" id="contactForm">
              <div className="form-row">
                <label>Full name<input name="fullName" type="text" placeholder="Your full name" required /></label>
                <label>Address<input name="address" type="text" placeholder="Your address" required /></label>
              </div>
              <label>Services required
                <select name="service" required>
                  <option value="">Choose a service or product</option>
                  <option>Home / office security</option>
                  <option>Security cameras</option>
                  <option>VIP protection</option>
                  <option>Event security management</option>
                  <option>Vehicle / asset tracking</option>
                  <option>Smart security products</option>
                  <option>Other / customised solution</option>
                </select>
              </label>
              <label>Your message<textarea name="message" rows="5" placeholder="Tell us a little about your security needs..." required></textarea></label>
              <button className="button button-gold submit-button" type="submit">Send message <span>↗</span></button>
              <p className="form-note">Your email app will open with your message addressed to our support team.</p>
              <p className="form-status" id="formStatus" role="status"></p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <Link className="brand footer-brand" to="/">
            <img src={logoimg} alt="Ovabel Sectech logo" />
            <span>OVABEL <b>SECTECH</b></span>
          </Link>
          <p>Redefine excellence in security system.</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/account">Login</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ovabel Sectech. All rights reserved.</span>
          <Link to="/">Back to top ↑</Link>
        </div>
      </footer>
    </div>
  );
};

export default App;