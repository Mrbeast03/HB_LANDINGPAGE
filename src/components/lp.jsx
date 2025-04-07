import React, { useEffect, useRef, useState } from "react";
import "./LP.css";
import Login from './Login';
import Signup from './Signup';
import './HexagonBackground.css';
import "./DynamicAnimations.css";
 

/**
 * Landing Page (LP) Component
 * 
 * This is the main landing page component for HexaBeta platform.
 * It includes:
 * - Header with navigation
 * - Hero section with video demo
 * - Feature sections
 * - Testimonials
 * - Contact form
 * - Footer
 * - Authentication modals (Login/Signup)
 */
function LP() {
  // State management
  const [showAuthModal, setShowAuthModal] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs for DOM elements
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const spotlightRef = useRef(null);
  const card3DRefs = useRef([]);
  
  // Modal handler functions
  const handleLoginClick = () => setShowAuthModal('login');
  const handleSignupClick = () => setShowAuthModal('signup');
  const closeAuthModal = () => setShowAuthModal(null);
  const switchToSignup = () => setShowAuthModal('signup');
  const switchToLogin = () => setShowAuthModal('login');

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  /**
   * Video Demo Effect
   * Handles play/pause events for the demo video
   */
  useEffect(() => {
    const video = document.getElementById('demo-video');
    const container = document.getElementById('demo-video-container');
    
    const handlePlay = () => {
      container.classList.add('playing');
    };
    
    const handlePause = () => {
      container.classList.remove('playing');
    };
    
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    
    // Handle demo button clicks
    const demoButtons = document.querySelectorAll('[href="#demo"], [onclick*="demo-video"]');
    demoButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        video.play();
      });
    });
    
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  /**
   * Feature Cards Data
   * Reusable data for feature cards to avoid repetition
   */
  const featureCards = [
    {
      icon: 'fas fa-bolt',
      title: 'Instant Deployment',
      desc: 'Deploy your apps globally in seconds with our edge network.',
    },
    {
      icon: 'fas fa-brain',
      title: 'AI Assistance',
      desc: 'Get intelligent code suggestions and auto-completion.',
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Collaboration Tools',
      desc: 'Real-time collaboration for your entire team.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Enterprise Security',
      desc: 'Built-in security and compliance for peace of mind.',
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Performance Monitoring',
      desc: 'Real-time insights into your app\'s performance.',
    },
    {
      icon: 'fas fa-plug',
      title: '200+ Integrations',
      desc: 'Connect with your favorite tools and services.',
    }
  ];

  /**
   * Testimonials Data
   * Reusable data for testimonials section
   */
  const testimonials = [
    {
      text: "HexaBeta has completely transformed our development process. What used to take days now happens in minutes.",
      author: "Sarah Johnson",
      title: "Senior Developer, TechCorp",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "#3a86ff"
    },
    {
      text: "The integration capabilities are phenomenal. We've connected all our existing tools seamlessly.",
      author: "Michael Chen",
      title: "CTO, StartupX",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "#8338ec"
    },
    {
      text: "As a solo developer, I was skeptical about investing in another tool, but HexaBeta has paid for itself tenfold.",
      author: "Priya Patel",
      title: "Founder, DevSolo",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      color: "#ff006e"
    }
  ];

  /**
   * Resources Data
   * Reusable data for resources section
   */
  const resources = [
    {
      image: "/blog-post.jpg",
      category: "Tutorial",
      title: "Getting Started with HexaBeta AI Tools",
      excerpt: "Learn how to leverage our AI tools to boost your productivity.",
      link: "Read more →",
    },
    {
      image: "/webinar.jpg",
      category: "Webinar",
      title: "Scaling Your App to Millions of Users",
      excerpt: "Best practices for scaling your application infrastructure.",
      link: "Watch now →",
    },
    {
      image: "/case-study.jpg",
      category: "Case Study",
      title: "How TechStart Scaled 10x with HexaBeta",
      excerpt: "Real-world example of rapid growth with our platform.",
      link: "Read case study →",
    },
  ];

  /**
   * Developer Experience Cards Data
   * Reusable data for developer experience section
   */
  const devExperienceCards = [
    {
      icon: 'fas fa-terminal',
      title: 'CLI & API First',
      text: 'Everything that can be done in the UI can be done via our CLI and API for maximum flexibility.',
      image: 'E:\hB_landing\landingpage\src\assets\A1.jpg',
      hexColor: '#00cec9',
      tags: ['CLI', 'REST API', 'GraphQL']
    },
    {
      icon: 'fas fa-code',
      title: 'Any Language',
      text: 'Bring your own language. We support all major languages and frameworks out of the box.',
      image: '/dev-languages.jpg',
      hexColor: '#0984e3',
      tags: ['JavaScript', 'Python', 'Go']
    },
    {
      icon: 'fas fa-rocket',
      title: 'Instant Preview',
      text: 'Get a live preview URL for every commit to share with your team or clients.',
      image: '/dev-preview.jpg',
      hexColor: '#6c5ce7',
      tags: ['Instant Deploy', 'Shareable URLs', 'Live Updates']
    }
  ];

  return (
    <div className="landing-page">
       
      {/* Background Elements */}
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
      <div className="bg-circle circle-3"></div>
     
       {/* Header Section */}

<header className="header">
  <div className=" header-container">
    <div className="logo-container">
      <img 
        src="src/assets/copyright.png" 
        alt="HexaBeta Logo" 
        className="logo" 
      />
      <span className="logo-text">HexaBeta</span>
    </div>

    <nav className="nav">
      <a href="#features" className="nav-link hover-underline">Features</a>
      <a href="#solutions" className="nav-link hover-underline">Solutions</a>
      <a href="#resources" className="nav-link hover-underline">Resources</a>
      <a href="#contact" className="nav-link hover-underline">Contact</a>
    </nav>

    <div className="header-actions">
      <button onClick={handleLoginClick} className="btn btn-outline">Get Started</button>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Build The Future</span> With Next-Gen Tech
            </h1>
            <p className="hero-subtitle">
              The complete developer platform to build, test, and deploy applications at scale with cutting-edge technology.
            </p>
            <div className="hero-cta">
              <button onClick={handleLoginClick} className="btn btn-primary">Start Building Free</button>
              <button 
                className="btn btn-outline" 
                onClick={() => document.getElementById('demo-video').play()}
              >
                Watch Demo <i className="fas fa-play"></i>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10M+</div>
                <div className="stat-label">Developers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Integrations</div>
              </div>
            </div>
          </div>
<div className="hero-visual">
  <div className="video-mockup-container" id="demo-video-container">
    {/* 3D Hexagon Video Player */}
    <div className="hexagon-3d-container">
      <div className="hexagon-3d" id="hexagon-3d">
        {/* Hexagon Faces - Only first face shows video */}
        <div className="hexagon-face hexagon-face-front">
          <div className="play-button-overlay">
            <button
              className="play-button"
              onClick={() => {
                const video = document.getElementById('demo-video');
                const hexagon = document.getElementById('hexagon-3d');
                if (video) {
                  video.play().catch(error => {
                    console.error('Error attempting to play video:', error);
                  });
                  hexagon.classList.add('playing');
                }
              }}
              aria-label="Play demo video"
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
          <video
            id="demo-video"
            className="demo-video"
            poster="/assets/video-poster.jpg"
            preload="metadata"
            loop
          >
            <source src="src/assets/imageedit_1_3002154370-VEED.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hexagon-face hexagon-face-right"></div>
         <div className="hexagon-face hexagon-face-back"></div>
        <div className="hexagon-face hexagon-face-left"></div> 
        <div className="hexagon-face hexagon-face-top"></div>
        <div className="hexagon-face hexagon-face-bottom"></div>
      </div>
      
      {/* Floating Cards Around Hexagon */}
      <div className="floating-cards">
        <div className="card card-1 floating">
          <div className="card-icon"><i className="fas fa-code"></i></div>
          <div className="card-text">Code</div>
        </div>
        <div className="card card-2 floating delay-1">
          <div className="card-icon"><i className="fas fa-server"></i></div>
          <div className="card-text">Deploy</div>
        </div>
        <div className="card card-3 floating delay-2">
          <div className="card-icon"><i className="fas fa-chart-line"></i></div>
          <div className="card-text">Analyze</div>
        </div>
      </div>
      
      {/* Watch Demo Button */}
      <button 
        className="watch-demo-btn"
        onClick={() => {
          const video = document.getElementById('demo-video');
          const hexagon = document.getElementById('hexagon-3d');
          if (video) {
            video.play().catch(error => {
              console.error('Error attempting to play video:', error);
            });
            hexagon.classList.add('playing');
          }
        }}
      >
        Watch Demo
      </button>
    </div>

    {/* Video Description */}
    <div className="video-description">
      <h4>See HexaBeta in Action</h4>
      <p>Watch how to build and deploy an app in under 2 minutes</p>
    </div>
  </div>
</div>
</div>
        
      </section>
       {/* About HexaBeta Section */}
       <section className="about-hexabeta" id="about">
        <div className="containerhexabeta">
          <div className="hexabeta-header">
            <span className="section-tag">PLATFORM OVERVIEW</span>
            <h2 className="section-title">
              HexaBeta: The Complete Development <span className="break-word">Ecosystem</span>
            </h2>
            <p className="section-subtitle">A unified platform that brings together all the tools modern developers need to build, deploy, and scale applications faster.</p>
          </div>

          {/* Main Platform Showcase */}
          <div className="platform-showcase">
            {/* Left Column - Platform Features */}
            <div className="platform-features">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="feature-content">
                  <h3>Smart Code Editor</h3>
                  <p>AI-powered coding assistance with real-time collaboration</p>
                  <div className="code-placeholder">
                    <pre>
                      <code>
{`function greet() {
  // AI suggests completions
  const [message, setMessage] = useState('')
  return <div>{message}</div>
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-server"></i>
                </div>
                <div className="feature-content">
                  <h3>Instant Cloud Deployment</h3>
                  <p>One-click deployment to our global edge network</p>
                  <div className="deployment-placeholder">
                    <div className="server-node"></div>
                    <div className="connection-line"></div>
                    <div className="server-node"></div>
                    <div className="connection-line"></div>
                    <div className="server-node"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Platform Mockup */}
            <div className="platform-mockup">
              <div className="mockup-container">
                <div className="mockup-screen">
                  <div className="mockup-navbar"></div>
                  <div className="mockup-sidebar"></div>
                  <div className="mockup-editor">
                    <div className="code-line"></div>
                    <div className="code-line shorter"></div>
                    <div className="code-line"></div>
                    <div className="code-line shorter"></div>
                    <div className="code-line"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Platform Features */}
            <div className="platform-features">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="feature-content">
                  <h3>Integrated Toolchain</h3>
                  <p>Everything from version control to CI/CD pipelines</p>
                  <div className="tools-grid">
                    {['Git', 'CI/CD', 'DB', 'Auth', 'Storage', 'API'].map((tool) => (
                      <div key={tool} className="tool-badge">{tool}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="feature-content">
                  <h3>Real-time Analytics</h3>
                  <p>Monitor performance and usage metrics</p>
                  <div className="analytics-placeholder">
                    <div className="graph-line" style={{ height: '30%' }}></div>
                    <div className="graph-line" style={{ height: '70%' }}></div>
                    <div className="graph-line" style={{ height: '45%' }}></div>
                    <div className="graph-line" style={{ height: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="learning-path">
            <h3>Start Building in Minutes</h3>
            <div className="path-steps">
              <div className="path-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Create Account</h4>
                  <p>Sign up with GitHub or email</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Start a Project</h4>
                  <p>Choose from templates or blank slate</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Deploy Instantly</h4>
                  <p>Push to production with one click</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       

     
      {/* Features Section */}
      <section className="features" id="features">
  <div className="container">
    <div className="section-header animate-on-scroll slide-up">
      <div className="section-label">FEATURES</div>
      <h2 className="section-title">Everything You Need to Build Amazing Apps</h2>
      <p className="section-subtitle">Our platform provides all the tools and services to take your project from idea to global scale.</p>
    </div>
    <div className="features-slider-wrapper">
      <div className="features-slider">
        {featureCards.map((feature, index) => (
          <div key={index} className="feature-hexagon-container">
            <div className="feature-hexagon">
              <div className="hexagon-content">
                <div className="feature-icon">
                  <i className={`${feature.icon} animate-icon`}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <a href="#learn-more" className="feature-link hover-effect">
                  Learn more <span className="arrow">→</span>
                </a>
              </div>
            </div>
            <div className="hexagon-shadow"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
 {/* Solutions Section */}
 <section className="solutions" id="solutions">
  <div className="containe">
    {/* Section Header */}
    <div className="section-header">
      <span className="section-ta">EMPOWER YOUR JOURNEY</span>
      <h2>HexaBeta Solutions for Tech Builders</h2>
      <p className="section-subtitle">
        Cutting-edge tools designed for developers, students, and innovators
      </p>
    </div>

    {/* Solutions Grid */}
    <div className="solutions-grid">

      {/* 1. Developer Solution */}
      <div className="solution-card">
        <div className="solution-icon">
          <img src="src\assets\editing_14320421.png" alt="Code" />
        </div>
        <h3>Developer Suite</h3>
        <p>Everything you need to build, test and deploy faster</p>
        <ul>
          <li>⚡ AI-powered code completion</li>
          <li>🔌 100+ framework integrations</li>
          <li>🌐 Free cloud deployment</li>
        </ul>
        <button className="btn-p">Explore Dev Tools</button>
      </div>

      {/* 2. Student Solution */}
      <div className="solution-card highlight">
        <div className="solution-icon">
          <img src="src\assets\code_868786.png" alt="Student" />
        </div>
        <h3>Student Pack</h3>
        <p>Special resources for learners and educators</p>
        <ul>
          <li>🎓 Free verified student license</li>
          <li>📚 Interactive learning modules</li>
          <li>👨‍🏫 Classroom collaboration tools</li>
        </ul>
        <button className="btn-p">Get Student Access</button>
      </div>

      {/* 3. Open Source Solution */}
      <div className="solution-card">
        <div className="solution-icon">
          <img src="src\assets\education_3976625.png" alt="Open Source" />
        </div>
        <h3>Open Source Program</h3>
        <p>Support for community-driven innovation</p>
        <ul>
          <li>❤️ Sponsorship for OS projects</li>
          <li>🤝 Contributor rewards</li>
          <li>📦 Free hosting for public repos</li>
        </ul>
        <button className="btn-p">Join OSS Program</button>
      </div>
    </div>
  </div>
</section>
<section className="dev-experience">
  <div className="container">
    {/* Section Header */}
    <div className="section-header">
      <span className="section-label">DEVELOPER EXPERIENCE</span>
      <h2 className="section-title">Loved by Developers Worldwide</h2>
      <p className="section-subtitle">
        Designed by developers, for developers. Experience the difference with our intuitive tools.
      </p>
    </div>

    {/* Background Hexagons - Using CSS hexagons instead of images */}
    <div className="experience-hexagons">
      <div className="hexagon-bg hexagon-1"></div>
      <div className="hexagon-bg hexagon-2"></div>
      <div className="hexagon-bg hexagon-3"></div>
    </div>

    {/* Cards Grid with placeholder images */}
    <div className="experience-cards">
      {/* Card 1 */}
      <div className="experience-card" style={{ '--hex-color': '#3a86ff' }}>
        <div className="hexagon-icon-container">
          <div className="hexagon-icon-bg">
            <i className="fas fa-code"></i>
          </div>
        </div>
        <div className="card-image-container">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Coding" 
            className="card-image" 
          />
          <div className="image-overlay"></div>
        </div>
        <div className="card-content">
          <h3 className="card-title">Seamless Integration</h3>
          <p className="card-text">Easy to integrate with your existing workflow and tools.</p>
          <div className="tech-stack">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="experience-card" style={{ '--hex-color': '#8338ec' }}>
        <div className="hexagon-icon-container">
          <div className="hexagon-icon-bg">
            <i className="fas fa-rocket"></i>
          </div>
        </div>
        <div className="card-image-container">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Performance" 
            className="card-image" 
          />
          <div className="image-overlay"></div>
        </div>
        <div className="card-content">
          <h3 className="card-title">Blazing Fast</h3>
          <p className="card-text">Optimized for performance with minimal overhead.</p>
          <div className="tech-stack">
            <span className="tech-tag">Webpack</span>
            <span className="tech-tag">Babel</span>
            <span className="tech-tag">ES6</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="experience-card" style={{ '--hex-color': '#ff006e' }}>
        <div className="hexagon-icon-container">
          <div className="hexagon-icon-bg">
            <i className="fas fa-cogs"></i>
          </div>
        </div>
        <div className="card-image-container">
          <img 
            src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Customization" 
            className="card-image" 
          />
          <div className="image-overlay"></div>
        </div>
        <div className="card-content">
          <h3 className="card-title">Highly Customizable</h3>
          <p className="card-text">Tailor every aspect to match your needs.</p>
          <div className="tech-stack">
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">SASS</span>
            <span className="tech-tag">Themes</span>
          </div>
        </div>
      </div>
    </div>

    {/* Developer Quote */}
    <div className="developer-quote">
      <div className="quote-container">
        <div className="quote-icon">
          <i className="fas fa-quote-left"></i>
        </div>
        <blockquote>
          "HexaBeta has transformed our development workflow. What used to take days now happens in minutes."
        </blockquote>
        <div className="quote-author">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Developer" 
            className="author-avatar" 
          />
          <div className="author-info">
            <div className="author-name">Sarah Johnson</div>
            <div className="author-title">Senior Developer, TechCorp</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 

      {/* Resources Section */} 
<section className="resources" id="resources">
  <div className="container">
    {/* Section Header */}
    <div className="section-header">
      <span className="section-label">RESOURCES</span>
      <h2 className="section-title">Learn and Grow With Us</h2>
      <p className="section-subtitle">
        Discover our collection of tutorials, webinars, and case studies to enhance your skills.
      </p>
    </div>

    {/* Background Hexagons */}
    <div className="resources-hexagons">
      <div className="hexagon-bg hexagon-1"></div>
      <div className="hexagon-bg hexagon-2"></div>
      <div className="hexagon-bg hexagon-3"></div>
    </div>

    {/* Resources Grid */}
    <div className="resources-grid">
      {/* Tutorial Card */}
      <div className="resource-card" style={{ '--hex-color': '#3a86ff' }}>
        <div className="hexagon-icon-container">
          <div className="hexagon-icon-bg">
            <i className="fas fa-graduation-cap"></i>
          </div>
        </div>
        <div className="resource-image">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Tutorial" 
          />
          {/* <div className="image-overlay"></div> */}
        </div>
        <div className="resource-content">
          <div className="resource-category">Tutorial</div>
          <h3 className="resource-title">Getting Started with HexaBeta AI Tools</h3>
          <p className="resource-excerpt">Learn how to leverage our AI tools to boost your productivity.</p>
          <a href="#read-more" className="resource-link">Read more →</a>
        </div>
      </div>

      {/* Webinar Card */}
      <div className="resource-card" style={{ '--hex-color': '#8338ec' }}>
        <div className="hexagon-icon-container">
          <div className="hexagon-icon-bg">
            <i className="fas fa-video"></i>
          </div>
        </div>
        <div className="resource-image">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Webinar" 
          />
          {/* <div className="image-overlay"></div> */}
        </div>
        <div className="resource-content">
          <div className="resource-category">Webinar</div>
          <h3 className="resource-title">Scaling Your App to Millions of Users</h3>
          <p className="resource-excerpt">Best practices for scaling your application infrastructure.</p>
          <a href="#watch-now" className="resource-link">Watch now →</a>
        </div>
      </div>

      {/* Case Study Card */}
      <div className="resource-card" style={{ '--hex-color': '#ff006e' }}>
        <div className="hexagon-icon-container">
          <div className="hexagon-icon-bg">
            <i className="fas fa-chart-line"></i>
          </div>
        </div>
        <div className="resource-image">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Case Study" 
          />
          {/* <div className="image-overlay"></div> */}
        </div>
        <div className="resource-content">
          <div className="resource-category">Case Study</div>
          <h3 className="resource-title">How TechStart Scaled 10x with HexaBeta</h3>
          <p className="resource-excerpt">Real-world example of rapid growth with our platform.</p>
          <a href="#case-study" className="resource-link">Read case study →</a>
        </div>
      </div>
    </div>

    {/* CTA Button */}
    <div className="resources-cta">
      <a href="#all-resources" className="btn btn-outline">View All Resources</a>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info animate-on-scroll slide-left">
              <h2 className="contact-title">Let's Build Something Amazing Together</h2>
              <p className="contact-subtitle">Our team is here to help you with any questions about our platform or to discuss custom solutions.</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-iconemail"><i className="fas fa-envelope"></i></div>
                  <div className="method-info">
                    <div className="method-label">Email</div>
                    <a href="mailto:hello@hexabeta.com" className="method-value">hello@hexabeta.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-iconphone"><i className="fas fa-phone-alt"></i></div>
                  <div className="method-info">
                    <div className="method-label">Phone</div>
                    <a href="tel:+18005551234" className="method-value">+1 (800) 555-1234</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-iconaddress"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="method-info">
                    <div className="method-label">HQ</div>
                    <div className="method-value">123 Tech Street, San Francisco, CA</div>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="#twitter" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#linkedin" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#youtube" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="contact-form-container animate-on-scroll slide-right">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input type="text" id="company" placeholder="Enter your company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How Can We Help?</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your project or questions"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col animate-on-scroll fade-in">
              <div className="footer-logo">
                <img src="src/assets/copyright.png" alt="HexaBeta Logo" className="logo" />
                <span className="logo-text">HexaBeta</span>
              </div>
              <p className="footer-about">Empowering developers and businesses with cutting-edge technology solutions.</p>
              <div className="footer-social">
                <a href="#twitter" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#github" className="social-link"><i className="fab fa-github"></i></a>
                <a href="#linkedin" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#youtube" className="social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col animate-on-scroll fade-in delay-1">
              <h3 className="footer-title">Product</h3>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#changelog">Changelog</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
              </ul>
            </div>
            <div className="footer-col animate-on-scroll fade-in delay-2">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#webinars">Webinars</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
            </div>
            <div className="footer-col animate-on-scroll fade-in delay-3">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#legal">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom animate-on-scroll fade-in">
            <div className="copyright">&copy; 2025 HexaBeta Technologies. All rights reserved.</div>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      

      {/* Auth Modals */}
      {showAuthModal === 'login' && (
        <Login onClose={closeAuthModal} onSwitchToSignup={switchToSignup} />
      )}
      {showAuthModal === 'signup' && (
        <Signup onClose={closeAuthModal} onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default LP;