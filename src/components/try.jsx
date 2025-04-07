// /* Base Styles */
// :root {
//     --primary: #008080; /* Updated to teal */
//     --primary-dark: #006666; /* A darker shade of teal */
//     --secondary: #00cec9;
//     --dark: #2d3436;
//     --gray: #636e72;
//     --light-gray: #dfe6e9;
//     --light: #f5f6fa;
//     --white: #ffffff;
//     --black: #000000;
//     --success: #00b894;
//     --warning: #fdcb6e;
//     --danger: #d63031;
//     --info: #0984e3;
    
//     --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//     --shadow-md: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
//     --shadow-lg: 0 10px 25px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05);
//     --shadow-xl: 0 20px 40px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05);
    
//     --radius-sm: 4px;
//     --radius-md: 8px;
//     --radius-lg: 12px;
//     --radius-full: 9999px;
    
//     --transition: all 0.3s ease;
//   }
  
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   body {
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     line-height: 1.6;
//     color: var(--dark);
//     background-color: var(--light);
//     overflow-x: hidden;
//   }
  
//   .container {
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
//   }
  
//   /* Typography */
//   h1, h2, h3, h4, h5, h6 {
//     font-weight: 700;
//     line-height: 1.2;
//     margin-bottom: 1rem;
//   }
  
//   h1 {
//     font-size: 3rem;
//   }
  
//   h2 {
//     font-size: 2.5rem;
//   }
  
//   h3 {
//     font-size: 1.75rem;
//   }
  
//   p {
//     margin-bottom: 1rem;
//   }
  
//   a {
//     text-decoration: none;
//     color: inherit;
//   }
  
//   /* Buttons */
//   .btn {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     padding: 0.75rem 1.5rem;
//     border-radius: var(--radius-md);
//     font-weight: 600;
//     transition: var(--transition);
//     cursor: pointer;
//     border: 2px solid transparent;
//   }
  
//   .btn-primary {
//     background-color: var(--primary);
//     color: var(--white);
//   }
  
//   .btn-primary:hover {
//     background-color: var(--primary-dark);
//     transform: translateY(-2px);
//     box-shadow: var(--shadow-md);
//   }
  
//   .btn-outline {
//     background-color: transparent;
//     border-color: var(--primary);
//     color: var(--primary);
//   }
  
//   .btn-outline:hover {
//     background-color: var(--primary);
//     color: var(--white);
//     transform: translateY(-2px);
//     box-shadow: var(--shadow-md);
//   }
  
//   .btn-lg {
//     padding: 1rem 2rem;
//     font-size: 1.1rem;
//   }
  
//   /* Header */
//   .header {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     z-index: 1000;
//     padding: 1rem 0;
//     background-color: rgba(255, 255, 255, 0.95);
//     backdrop-filter: blur(10px);
//     box-shadow: var(--shadow-sm);
//     transition: var(--transition);
//   }
  
//   .header-container {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
  
//   .logo-container {
//     display: flex;
//     align-items: center;
//     gap: 0.75rem;
//   }
  
//   .logo {
//     height: 40px;
//     width: auto;
//   }
  
//   .logo-text {
//     font-weight: 700;
//     font-size: 1.25rem;
//     color: var(--primary);
//   }
  
//   .nav {
//     display: flex;
//     gap: 2rem;
//   }
  
//   .nav-link {
//     font-weight: 500;
//     color: var(--gray);
//     transition: var(--transition);
//     position: relative;
//   }
  
//   .nav-link:hover {
//     color: var(--primary);
//   }
  
//   .hover-underline::after {
//     content: '';
//     position: absolute;
//     bottom: -4px;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background-color: var(--primary);
//     transition: var(--transition);
//   }
  
//   .hover-underline:hover::after {
//     width: 100%;
//   }
  
//   .header-actions {
//     display: flex;
//     gap: 1rem;
//   }
  
//   /* Hero Section */
//   .hero {
//     padding: 10rem 0 5rem;
//     position: relative;
//     overflow: hidden;
//   }
  
//   .hero-container {
//     display: flex;
//     align-items: center;
//     gap: 3rem;
//   }
  
//   .hero-content {
//     flex: 1;
//   }
  
//   .hero-visual {
//     flex: 1;
//     position: relative;
//   }
  
//   .badge {
//     display: inline-block;
//     padding: 0.5rem 1rem;
//     background-color: var(--secondary);
//     color: var(--white);
//     border-radius: var(--radius-full);
//     font-weight: 600;
//     font-size: 0.875rem;
//     margin-bottom: 1.5rem;
//   }
  
//   @keyframes pulse {
//     0% { transform: scale(1); }
//     50% { transform: scale(1.05); }
//     100% { transform: scale(1); }
//   }
  
//   .pulse {
//     animation: pulse 2s infinite;
//   }
  
//   .hero-title {
//     font-size: 3.5rem;
//     margin-bottom: 1.5rem;
//     line-height: 1.1;
//   }
  
//   .gradient-text {
//     background: linear-gradient(90deg, var(--primary), var(--secondary));
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//   }
  
//   .hero-subtitle {
//     font-size: 1.25rem;
//     color: var(--gray);
//     margin-bottom: 2rem;
//     max-width: 600px;
//   }
  
//   .hero-cta {
//     display: flex;
//     gap: 1rem;
//     margin-bottom: 3rem;
//   }
  
//   .hero-stats {
//     display: flex;
//     gap: 2rem;
//   }
  
//   .stat-item {
//     text-align: center;
//   }
  
//   .stat-number {
//     font-size: 2rem;
//     font-weight: 700;
//     color: var(--primary);
//     margin-bottom: 0.25rem;
//   }
  
//   .stat-label {
//     font-size: 0.875rem;
//     color: var(--gray);
//     text-transform: uppercase;
//     letter-spacing: 1px;
//   }
  
//   .code-editor {
//     background-color: #282c34;
//     border-radius: var(--radius-lg);
//     overflow: hidden;
//     box-shadow: var(--shadow-xl);
//     transform: perspective(1000px) rotateY(-10deg);
//     transition: var(--transition);
//   }
  
//   .code-editor:hover {
//     transform: perspective(1000px) rotateY(-5deg);
//   }
  
//   .editor-header {
//     display: flex;
//     align-items: center;
//     padding: 0.75rem 1rem;
//     background-color: #1e2227;
//   }
  
//   .editor-dots {
//     display: flex;
//     gap: 0.5rem;
//     margin-right: 1rem;
//   }
  
//   .dot {
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//   }
  
//   .dot.red {
//     background-color: #ff5f56;
//   }
  
//   .dot.yellow {
//     background-color: #ffbd2e;
//   }
  
//   .dot.green {
//     background-color: #27c93f;
//   }
  
//   .editor-title {
//     font-size: 0.875rem;
//     color: var(--light-gray);
//   }
  
//   .editor-content {
//     padding: 1.5rem;
//   }
  
//   .editor-content pre {
//     margin: 0;
//     color: #abb2bf;
//     font-family: 'Fira Code', monospace;
//     font-size: 0.875rem;
//     line-height: 1.5;
//   }
  
//   .floating-cards {
//     position: absolute;
//     bottom: -50px;
//     right: -50px;
//     display: flex;
//     gap: 1rem;
//   }
  
//   .card {
//     background-color: var(--white);
//     border-radius: var(--radius-md);
//     padding: 1.5rem;
//     box-shadow: var(--shadow-lg);
//     transition: var(--transition);
//   }
  
//   .card-1 {
//     background: linear-gradient(135deg, var(--primary), var(--secondary));
//     color: var(--white);
//   }
  
//   .card-2 {
//     background: linear-gradient(135deg, #0984e3, #00cec9);
//     color: var(--white);
//   }
  
//   .card-3 {
//     background: linear-gradient(135deg, #d63031, #e84393);
//     color: var(--white);
//   }
  
//   .card-icon {
//     font-size: 1.5rem;
//     margin-bottom: 0.5rem;
//   }
  
//   .floating {
//     animation: float 6s ease-in-out infinite;
//   }
  
//   .delay-1 {
//     animation-delay: 1s;
//   }
  
//   .delay-2 {
//     animation-delay: 2s;
//   }
  
//   @keyframes float {
//     0% { transform: translateY(0px); }
//     50% { transform: translateY(-20px); }
//     100% { transform: translateY(0px); }
//   }
  
//   /* Trusted By Section */
//   .trusted-by {
//     padding: 4rem 0;
//     background-color: rgba(255, 255, 255, 0.5);
//   }
  
//   .section-label {
//     font-size: 0.875rem;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//     color: var(--gray);
//     text-align: center;
//     margin-bottom: 1rem;
//   }
  
//   .logos {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 3rem;
//     margin-top: 2rem;
//   }
  
//   .logo-item img {
//     height: 40px;
//     width: auto;
//     opacity: 0.7;
//     transition: var(--transition);
//     filter: grayscale(100%);
//   }
  
//   .logo-item:hover img {
//     opacity: 1;
//     filter: grayscale(0%);
//   }
  
//   /* Sections Common */
//   .section-header {
//     text-align: center;
//     max-width: 700px;
//     margin: 0 auto 3rem;
//   }
  
//   .section-title {
//     margin-bottom: 1rem;
//   }
  
//   .section-subtitle {
//     color: var(--gray);
//   }
//    /* Features Section */
//   .features {
//     padding: 6rem 0;
//     overflow: hidden;
//     position: relative;
//     width: 100%;
//     background-color: var(--background);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   /* Scrolling Wrapper */
//   .features-slider-wrapper {
//     width: 100%;
//     overflow: hidden;
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   /* Scrolling Container */
//   .features-slider {
//     display: flex;
//     gap: 2rem;
//     width: max-content;
//     animation: scroll 30s linear infinite;
//   }
  
//   /* Feature Card */
//   .feature-card {
//     flex: 0 0 350px; /* Fixed width for better visibility */
//     background-color: var(--white);
//     border-radius: var(--radius-lg);
//     padding: 2rem;
//     box-shadow: var(--shadow-md);
//     transition: var(--transition);
//     border: 1px solid rgba(0, 0, 0, 0.05);
//   }
  
//   /* Responsive Adjustments */
//   @media (max-width: 1024px) {
//     .feature-card {
//       flex: 0 0 45%;
//     }
//   }
  
//   @media (max-width: 768px) {
//     .feature-card {
//       flex: 0 0 100%;
//     }
//   }
  
//   /* Smooth Infinite Scrolling */
//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }
  
//   /* Duplicate Content to Remove Jerk */
//   .features-slider::after {
//     content: "";
//     display: flex;
//     gap: 2rem;
//     animation: inherit;
//   }
  
//   /* Hover Effects */
//   .feature-card:hover {
//     transform: translateY(-5px);
//     box-shadow: var(--shadow-lg);
//   }
  
//   /* Feature Icon */
//   .feature-icon {
//     font-size: 2rem;
//     color: var(--primary);
//     margin-bottom: 1.5rem;
//   }
  
//   /* Feature Title */
//   .feature-title {
//     margin-bottom: 1rem;
//   }
  
//   /* Feature Description */
//   .feature-desc {
//     color: var(--gray);
//     margin-bottom: 1.5rem;
//   }
  
//   /* Feature Link */
//   .feature-link {
//     font-weight: 600;
//     color: var(--primary);
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     transition: all 0.3s ease;
//   }
  
//   /* Arrow Animation */
//   .feature-link .arrow {
//     display: inline-block;
//     transition: transform 0.3s ease;
//   }
  
//   .feature-link:hover .arrow {
//     transform: translateX(5px);
//   }
  
  
//   /* Solutions Section */
//   .solutions {
//     padding: 6rem 0;
//     background-color: rgba(0, 128, 128, 0.05); /* Updated to teal */
//   }
  
//   .tabs {
//     background-color: var(--white);
//     border-radius: var(--radius-lg);
//     overflow: hidden;
//     box-shadow: var(--shadow-md);
//   }
  
//   .tab-header {
//     display: flex;
//     border-bottom: 1px solid var(--light-gray);
//   }
  
//   .tab-btn {
//     padding: 1rem 2rem;
//     background: none;
//     border: none;
//     font-weight: 600;
//     color: var(--gray);
//     cursor: pointer;
//     position: relative;
//   }
  
//   .tab-btn.active {
//     color: var(--primary);
//   }
  
//   .tab-btn.active::after {
//     content: '';
//     position: absolute;
//     bottom: -1px;
//     left: 0;
//     width: 100%;
//     height: 3px;
//     background-color: var(--primary);
//   }
  
//   .tab-content {
//     padding: 3rem;
//   }
  
//   .solution-content {
//     display: flex;
//     gap: 3rem;
//   }
  
//   .solution-text {
//     flex: 1;
//   }
  
//   .solution-image {
//     flex: 1;
//   }
  
//   .solution-image img {
//     width: 100%;
//     height: auto;
//     border-radius: var(--radius-md);
//     box-shadow: var(--shadow-md);
//   }
  
//   .solution-features {
//     margin: 1.5rem 0;
//     list-style-type: none;
//   }
  
//   .solution-features li {
//     margin-bottom: 0.75rem;
//     padding-left: 1.5rem;
//     position: relative;
//   }
  
//   .solution-features li::before {
//     content: '✓';
//     position: absolute;
//     left: 0;
//     color: var(--success);
//     font-weight: bold;
//   }
  
//   /* Developer Experience Section */
//   .dev-experience {
//     padding: 6rem 0;
//   }
  
//   .experience-cards {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     gap: 2rem;
//   }
  
//   .experience-card {
//     background-color: var(--white);
//     border-radius: var(--radius-lg);
//     padding: 2rem;
//     box-shadow: var(--shadow-md);
//     transition: var(--transition);
//   }
  
//   .experience-card:hover {
//     transform: translateY(-5px);
//     box-shadow: var(--shadow-lg);
//   }
  
//   .card-header {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     margin-bottom: 1.5rem;
//   }
  
//   .card-icon {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background-color: rgba(0, 128, 128, 0.1); /* Updated to teal */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: var(--primary);
//     font-size: 1.25rem;
//   }
  
//   /* Testimonials Section */
//   .testimonials {
//     padding: 6rem 0;
//     background-color: rgba(0, 206, 201, 0.05);
//   }
  
//   .testimonial-slider {
//     display: flex;
//     gap: 2rem;
//     overflow-x: auto;
//     padding-bottom: 1rem;
//     scroll-snap-type: x mandatory;
//   }
  
//   .testimonial-card {
//     min-width: 100%;
//     scroll-snap-align: start;
//   }
  
//   .testimonial-content {
//     background-color: var(--white);
//     border-radius: var(--radius-lg);
//     padding: 3rem;
//     box-shadow: var(--shadow-md);
//     position: relative;
//   }
  
//   .quote-icon {
//     position: absolute;
//     top: 1.5rem;
//     left: 1.5rem;
//     font-size: 3rem;
//     color: var(--light-gray);
//     font-family: serif;
//     line-height: 1;
//   }
  
//   .testimonial-text {
//     font-size: 1.25rem;
//     font-style: italic;
//     color: var(--gray);
//     margin-bottom: 2rem;
//     position: relative;
//     z-index: 1;
//   }
  
//   .testimonial-author {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }
  
//   .author-avatar {
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
//     object-fit: cover;
//   }
  
//   .author-name {
//     font-weight: 600;
//   }
  
//   .author-title {
//     color: var(--gray);
//     font-size: 0.875rem;
//   }
  
//   .slider-dots {
//     display: flex;
//     justify-content: center;
//     gap: 0.5rem;
//     margin-top: 2rem;
//   }
  
//   .dot {
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background-color: var(--light-gray);
//     cursor: pointer;
//   }
  
//   .dot.active {
//     background-color: var(--primary);
//   }
  
//   /* Pricing Section */
//   .pricing {
//     padding: 6rem 0;
//   }
  
//   .pricing-toggle {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 1rem;
//     margin-bottom: 3rem;
//   }
  
//   .toggle-label {
//     font-weight: 600;
//   }
  
//   .switch {
//     position: relative;
//     display: inline-block;
//     width: 60px;
//     height: 34px;
//   }
  
//   .switch input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
  
//   .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: var(--light-gray);
//     transition: var(--transition);
//   }
  
//   .slider:before {
//     position: absolute;
//     content: "";
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: var(--white);
//     transition: var(--transition);
//   }
  
//   input:checked + .slider {
//     background-color: var(--primary);
//   }
  
//   input:checked + .slider:before {
//     transform: translateX(26px);
//   }
  
//   .slider.round {
//     border-radius: 34px;
//   }
  
//   .slider.round:before {
//     border-radius: 50%;
//   }
  
//   .discount-badge {
//     background-color: var(--success);
//     color: var(--white);
//     padding: 0.25rem 0.5rem;
//     border-radius: var(--radius-full);
//     font-size: 0.75rem;
//     margin-left: 0.5rem;
//   }
  
//   .pricing-cards {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     gap: 2rem;
//   }
  
//   .pricing-card {
//     background-color: var(--white);
//     border-radius: var(--radius-lg);
//     padding: 2rem;
//     box-shadow: var(--shadow-md);
//     transition: var(--transition);
//     position: relative;
//     border: 1px solid var(--light-gray);
//   }
  
//   .pricing-card:hover {
//     transform: translateY(-5px);
//     box-shadow: var(--shadow-lg);
//   }
  
//   .pricing-card.popular {
//     border: 1px solid var(--primary);
//   }
  
//   .popular-badge {
//     position: absolute;
//     top: -12px;
//     right: 20px;
//     background-color: var(--primary);
//     color: var(--white);
//     padding: 0.25rem 1rem;
//     border-radius: var(--radius-full);
//     font-size: 0.75rem;
//     font-weight: 600;
//   }
  
//   .card-header {
//     text-align: center;
//     padding-bottom: 1.5rem;
//     border-bottom: 1px solid var(--light-gray);
//     margin-bottom: 1.5rem;
//   }
  
//   .plan-name {
//     font-size: 1.5rem;
//     margin-bottom: 0.5rem;
//   }
  
//   .plan-desc {
//     color: var(--gray);
//     margin-bottom: 1rem;
//   }
  
//   .plan-price {
//     margin-bottom: 1.5rem;
//   }
  
//   .price {
//     font-size: 2.5rem;
//     font-weight: 700;
//     color: var(--dark);
//   }
  
//   .period {
//     font-size: 1rem;
//     color: var(--gray);
//   }
  
//   .card-features ul {
//     list-style-type: none;
//   }
  
//   .card-features li {
//     margin-bottom: 0.75rem;
//     padding-left: 1.5rem;
//     position: relative;
//   }
  
//   .card-features li::before {
//     content: '✓';
//     position: absolute;
//     left: 0;
//     color: var(--success);
//     font-weight: bold;
//   }
  
//   .pricing-footer {
//     text-align: center;
//     margin-top: 3rem;
//     color: var(--gray);
//   }
  
//   .pricing-footer a {
//     color: var(--primary);
//     font-weight: 600;
//   }
  
//   /* Resources Section */
//   /* Resources Section - Simple First, Animated on Hover */
//   .resources {
//     padding: 6rem 0;
//     background-color: rgba(0, 128, 128, 0.05);
//     overflow: hidden;
//   }
  
//   /* Resources Section - Full Page Utilization */
//   .resources {
//     padding: 6rem 0;
//     min-height: 100vh; /* Utilize full viewport height */
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     background-color: rgba(0, 128, 128, 0.05);
//     overflow: hidden;
//     position: relative;
//   }
  
//   /* Default Simple State - Center on page */
//   .resources-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     gap: 2rem;
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
//   }
  
//   /* Original Card Styles Preserved */
//   .resource-card {
//     background-color: var(--white);
//     border-radius: var(--radius-lg);
//     overflow: hidden;
//     box-shadow: var(--shadow-md);
//     transition: all 0.3s ease;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//   }
  
//   .resource-card:hover {
//     transform: translateY(-5px);
//     box-shadow: var(--shadow-lg);
//   }
  
//   /* Content Styles */
//   .resource-image {
//     height: 200px;
//     overflow: hidden;
//     position: relative;
//   }
  
//   .resource-image img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.3s ease;
//   }
  
//   .resource-content {
//     padding: 1.5rem;
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//   }
  
//   .resource-category {
//     font-size: 0.75rem;
//     text-transform: uppercase;
//     letter-spacing: 1px;
//     color: var(--primary);
//     margin-bottom: 0.5rem;
//   }
  
//   .resource-title {
//     margin-bottom: 0.75rem;
//     font-size: 1.25rem;
//   }
  
//   .resource-excerpt {
//     color: var(--gray);
//     margin-bottom: 1rem;
//     flex-grow: 1;
//   }
  
//   .resource-link {
//     font-weight: 600;
//     color: var(--primary);
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     transition: color 0.3s ease;
//     align-self: flex-start;
//   }
  
//   /* Only activate advanced animations when hovering the grid */
//   .resources-grid:hover {
//     perspective: 1000px;
//   }
  
//   .resources-grid:hover .resource-card {
//     transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
//     transform-style: preserve-3d;
//   }
  
//   /* Blur and scale down non-hovered cards */
//   .resources-grid:hover .resource-card {
//     filter: blur(2px);
//     transform: scale(0.98);
//     opacity: 0.9;
//   }
  
//   /* Focused card styling */
//   .resources-grid:hover .resource-card:hover {
//     filter: blur(0);
//     transform: scale(1.05) translateY(-10px);
//     opacity: 1;
//     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//     z-index: 2;
//   }
  
//   /* Slide Animation */
//   .resource-card:nth-child(odd) {
//     transform-origin: left center;
//   }
  
//   .resource-card:nth-child(even) {
//     transform-origin: right center;
//   }
  
//   .resources-grid:hover .resource-card:hover ~ .resource-card {
//     animation: slideRight 0.5s ease-out forwards;
//   }
  
//   .resources-grid:hover .resource-card:has(~ .resource-card:hover) {
//     animation: slideLeft 0.5s ease-out forwards;
//   }
  
//   @keyframes slideRight {
//     to {
//       transform: translateX(20px) scale(0.98);
//     }
//   }
  
//   @keyframes slideLeft {
//     to {
//       transform: translateX(-20px) scale(0.98);
//     }
//   }
  
//   /* Underline Animation - Only on grid hover */
//   .resources-grid:hover .resource-image::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     height: 3px;
//     background: var(--primary);
//     transform: scaleX(0);
//     transform-origin: left;
//     transition: transform 0.5s ease;
//   }
  
//   .resources-grid:hover .resource-card:hover .resource-image::after {
//     transform: scaleX(1);
//   }
  
//   /* Responsive Adjustments */
//   @media (max-width: 768px) {
//     .resources {
//       min-height: auto;
//       padding: 4rem 0;
//     }
    
//     .resources-grid:hover .resource-card {
//       filter: none;
//       transform: none !important;
//       animation: none !important;
//       opacity: 1;
//     }
    
//     .resource-card:hover {
//       transform: translateY(-5px) !important;
//       box-shadow: var(--shadow-lg) !important;
//     }
//   }
  
//   /* Full Page Background Elements */
//   .resources::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: 
//       radial-gradient(circle at 20% 30%, rgba(0, 206, 201, 0.05) 0%, transparent 70%),
//       radial-gradient(circle at 80% 70%, rgba(0, 128, 128, 0.05) 0%, transparent 70%);
//     z-index: -1;
//   }
  
//   /* Floating Particles */
//   .resources-particles {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     pointer-events: none;
//     z-index: -1;
//   }
  
//   .resources-particle {
//     position: absolute;
//     background-color: rgba(0, 128, 128, 0.1);
//     border-radius: 50%;
//     animation: float-particle 15s infinite linear;
//   }
  
//   @keyframes float-particle {
//     0% {
//       transform: translateY(0) rotate(0deg);
//       opacity: 1;
//     }
//     50% {
//       opacity: 0.5;
//     }
//     100% {
//       transform: translateY(-100vh) rotate(720deg);
//       opacity: 0;
//     }
//   }
  
//   /* Section Header Enhancements */
//   .section-header {
//     text-align: center;
//     margin-bottom: 3rem;
//     position: relative;
//   }
  
//   .section-label {
//     display: inline-block;
//     font-size: 0.875rem;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//     color: var(--primary);
//     margin-bottom: 1rem;
//     padding: 0.5rem 1rem;
//     background-color: rgba(0, 128, 128, 0.1);
//     border-radius: var(--radius-full);
//   }
  
//   .section-title {
//     font-size: 2.5rem;
//     margin-bottom: 1rem;
//     background: linear-gradient(90deg, var(--primary), var(--secondary));
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//   }
  
//   .section-subtitle {
//     font-size: 1.25rem;
//     color: var(--gray);
//     max-width: 700px;
//     margin: 0 auto;
//   }
  
//   /* CTA Button at Bottom */
//   .resources-cta {
//     text-align: center;
//     margin-top: 4rem;
//     position: relative;
//     z-index: 1;
//   }
  
//   /* Generate random particles */
//   .resources-particle:nth-child(1) {
//     top: 20%;
//     left: 10%;
//     width: 8px;
//     height: 8px;
//     animation-delay: 0s;
//   }
//   .resources-particle:nth-child(2) {
//     top: 60%;
//     left: 80%;
//     width: 12px;
//     height: 12px;
//     animation-delay: 2s;
//   }
//   .resources-particle:nth-child(3) {
//     top: 40%;
//     left: 30%;
//     width: 6px;
//     height: 6px;
//     animation-delay: 4s;
//   }
   
  
//   /* Contact Section */
//   .contact {
//     padding: 6rem 0;
//   }
  
//   .contact-container {
//     display: flex;
//     gap: 3rem;
//   }
  
//   .contact-info {
//     flex: 1;
//   }
  
//   .contact-form-container {
//     flex: 1;
//   }
  
//   .contact-title {
//     font-size: 2.5rem;
//     margin-bottom: 1.5rem;
//   }
  
//   .contact-subtitle {
//     color: var(--gray);
//     margin-bottom: 2rem;
//   }
  
//   .contact-methods {
//     margin-bottom: 2rem;
//   }
  
//   .contact-method {
//     display: flex;
//     gap: 1rem;
//     margin-bottom: 1.5rem;
//   }
  
//   .method-icon {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background-color: rgba(0, 128, 128, 0.1); /* Updated to teal */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: var(--primary);
//     font-size: 1.25rem;
//   }
  
//   .method-label {
//     font-size: 0.875rem;
//     color: var(--gray);
//     margin-bottom: 0.25rem;
//   }
  
//   .method-value {
//     font-weight: 600;
//     color: var(--dark);
//   }
  
//   .social-links {
//     display: flex;
//     gap: 1rem;
//   }
  
//   .social-link {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background-color: rgba(0, 128, 128, 0.1); /* Updated to teal */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: var(--primary);
//     transition: var(--transition);
//   }
  
//   .social-link:hover {
//     background-color: var(--primary);
//     color: var(--white);
//   }
  
//   .contact-form {
//     background-color: var(--white);
//     border-radius: var(--radius-lg);
//     padding: 2rem;
//     box-shadow: var(--shadow-md);
//   }
  
//   .form-group {
//     margin-bottom: 1.5rem;
//   }
  
//   .form-group label {
//     display: block;
//     margin-bottom: 0.5rem;
//     font-weight: 600;
//   }
  
//   .form-group input,
//   .form-group textarea {
//     width: 100%;
//     padding: 0.75rem 1rem;
//     border: 1px solid var(--light-gray);
//     border-radius: var(--radius-md);
//     font-family: inherit;
//     transition: var(--transition);
//   }
  
//   .form-group input:focus,
//   .form-group textarea:focus {
//     outline: none;
//     border-color: var(--primary);
//     box-shadow: 0 0 0 3px rgba(0, 128, 128, 0.2); /* Updated to teal */
//   }
  
//   .form-group textarea {
//     min-height: 150px;
//     resize: vertical;
//   }
  
//   /* Footer */
//   .footer {
//     padding: 4rem 0 2rem;
//     background-color: var(--dark);
//     color: var(--light-gray);
//   }
  
//   .footer-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//     gap: 3rem;
//     margin-bottom: 3rem;
//   }
  
//   .footer-col {
//     display: flex;
//     flex-direction: column;
//   }
  
//   .footer-logo {
//     display: flex;
//     align-items: center;
//     gap: 0.75rem;
//     margin-bottom: 1.5rem;
//   }
  
//   .footer-logo .logo {
//     height: 30px;
//   }
  
//   .footer-logo .logo-text {
//     font-weight: 700;
//     font-size: 1.1rem;
//     color: var(--white);
//   }
  
//   .footer-about {
//     margin-bottom: 1.5rem;
//     opacity: 0.7;
//   }
  
//   .footer-social {
//     display: flex;
//     gap: 1rem;
//   }
  
//   .footer-social .social-link {
//     width: 36px;
//     height: 36px;
//     font-size: 0.875rem;
//     background-color: rgba(255, 255, 255, 0.1);
//     color: var(--white);
//   }
  
//   .footer-social .social-link:hover {
//     background-color: var(--primary);
//   }
  
//   .footer-title {
//     color: var(--white);
//     font-size: 1.1rem;
//     margin-bottom: 1.5rem;
//   }
  
//   .footer-links {
//     list-style-type: none;
//   }
  
//   .footer-links li {
//     margin-bottom: 0.75rem;
//   }
  
//   .footer-links a {
//     opacity: 0.7;
//     transition: var(--transition);
//   }
  
//   .footer-links a:hover {
//     opacity: 1;
//     color: var(--white);
//   }
  
//   .footer-bottom {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-top: 2rem;
//     border-top: 1px solid rgba(255, 255, 255, 0.1);
//   }
  
//   .copyright {
//     font-size: 0.875rem;
//     opacity: 0.7;
//   }
  
//   .footer-legal {
//     display: flex;
//     gap: 1.5rem;
//   }
  
//   .footer-legal a {
//     font-size: 0.875rem;
//     opacity: 0.7;
//     transition: var(--transition);
//   }
  
//   .footer-legal a:hover {
//     opacity: 1;
//     color: var(--white);
//   }
  
//   /* Background Elements */
//   .bg-circle {
//     position: absolute;
//     border-radius: 50%;
//     z-index: -1;
//     filter: blur(60px);
//     opacity: 0.15;
//   }
  
//   .circle-1 {
//     width: 600px;
//     height: 600px;
//     background: radial-gradient(circle, var(--primary), transparent 70%);
//     top: -300px;
//     right: -300px;
//   }
  
//   .circle-2 {
//     width: 400px;
//     height: 400px;
//     background: radial-gradient(circle, var(--secondary), transparent 70%);
//     bottom: -200px;
//     left: -200px;
//   }
  
//   .circle-3 {
//     width: 300px;
//     height: 300px;
//     background: radial-gradient(circle, #e84393, transparent 70%);
//     top: 50%;
//     left: 20%;
//   }
  
//   /* Animations */
//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }
  
//   @keyframes slideIn {
//     from { 
//       opacity: 0;
//       transform: translateY(50px);
//     }
//     to { 
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes fadeInUp {
//     from { 
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     to { 
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   .fadeIn {
//     animation: fadeIn 1s ease-in-out;
//   }
  
//   .slideIn {
//     animation: slideIn 1s ease-in-out;
//   }
  
//   .fadeInUp {
//     animation: fadeInUp 1s ease-in-out;
//   }
  
//   /* Responsive Styles */
//   @media (max-width: 1024px) {
//     .hero-container {
//       flex-direction: column;
//     }
    
//     .hero-content {
//       text-align: center;
//       margin-bottom: 3rem;
//     }
    
//     .hero-title {
//       font-size: 2.5rem;
//     }
    
//     .hero-cta {
//       justify-content: center;
//     }
    
//     .hero-stats {
//       justify-content: center;
//     }
    
//     .solution-content {
//       flex-direction: column;
//     }
    
//     .contact-container {
//       flex-direction: column;
//     }
//   }
  
//   @media (max-width: 768px) {
//     .nav {
//       display: none;
//     }
    
//     .header-actions {
//       display: none;
//     }
    
//     .hero {
//       padding: 8rem 0 3rem;
//     }
    
//     .hero-title {
//       font-size: 2rem;
//     }
    
//     .hero-subtitle {
//       font-size: 1rem;
//     }
    
//     .hero-cta {
//       flex-direction: column;
//       gap: 1rem;
//     }
    
//     .cta-actions {
//       flex-direction: column;
//       gap: 1rem;
//     }
    
//     .pricing-cards {
//       grid-template-columns: 1fr;
//     }
    
//     .footer-grid {
//       grid-template-columns: 1fr;
//     }
    
//     .footer-bottom {
//       flex-direction: column;
//       gap: 1rem;
//       text-align: center;
//     }
    
//     .footer-legal {
//       flex-direction: column;
//       gap: 0.5rem;
//     }
//   }
//   /* New Animations */
//   @keyframes slide-up {
//     from {
//       opacity: 0;
//       transform: translateY(50px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes slide-down {
//     from {
//       opacity: 0;
//       transform: translateY(-50px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes slide-left {
//     from {
//       opacity: 0;
//       transform: translateX(50px);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
  
//   @keyframes slide-right {
//     from {
//       opacity: 0;
//       transform: translateX(-50px);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
  
//   @keyframes slide-in {
//     from {
//       opacity: 0;
//       transform: translateX(-100%);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
  
//   @keyframes zoom-in {
//     from {
//       opacity: 0;
//       transform: scale(0.9);
//     }
//     to {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }
  
//   @keyframes fade-in {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
  
//   .slide-up {
//     animation: slide-up 0.8s ease-out forwards;
//   }
  
//   .slide-down {
//     animation: slide-down 0.8s ease-out forwards;
//   }
  
//   .slide-left {
//     animation: slide-left 0.8s ease-out forwards;
//   }
  
//   .slide-right {
//     animation: slide-right 0.8s ease-out forwards;
//   }
  
//   .slide-in {
//     animation: slide-in 0.8s ease-out forwards;
//   }
  
//   .zoom-in {
//     animation: zoom-in 0.8s ease-out forwards;
//   }
  
//   .fade-in {
//     animation: fade-in 0.8s ease-out forwards;
//   }
  
//   .delay-1 {
//     animation-delay: 0.1s;
//   }
  
//   .delay-2 {
//     animation-delay: 0.2s;
//   }
  
//   .delay-3 {
//     animation-delay: 0.3s;
//   }
  
//   /* Particles Background */
//   .particles {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     pointer-events: none;
//   }
  
//   .particle {
//     position: absolute;
//     background-color: rgba(0, 128, 128, 0.2); /* Updated to teal */
//     border-radius: 50%;
//     animation: float-particle 15s infinite linear;
//   }
  
//   @keyframes float-particle {
//     0% {
//       transform: translateY(0) rotate(0deg);
//       opacity: 1;
//     }
//     50% {
//       opacity: 0.5;
//     }
//     100% {
//       transform: translateY(-1000px) rotate(720deg);
//       opacity: 0;
//     }
//   }
  
//   /* Scroll Animation Trigger */
//   .animate-on-scroll {
//     opacity: 0;
//   }
  
//   .animate-on-scroll.animate {
//     opacity: 1;
//   }
  
//   /* Hover Animations */
//   .feature-card:hover {
//     transform: translateY(-10px) scale(1.02);
//     box-shadow: 0 20px 40px rgba(0,0,0,0.15);
//   }
  
//   .pricing-card:hover {
//     transform: translateY(-10px) scale(1.02);
//   }
  
//   .resource-card:hover {
//     transform: translateY(-10px) scale(1.02);
//   }
  
//   .experience-card:hover {
//     transform: translateY(-10px) scale(1.02);
//   }
  
//   /* Button Hover Effects */
//   .btn-primary:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 10px 20px rgba(0, 128, 128, 0.3); /* Updated to teal */
//   }
  
//   .btn-outline:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 10px 20px rgba(0, 128, 128, 0.1); /* Updated to teal */
//   }
  
//   /* Tab Animation */
//   .tab-btn {
//     transition: all 0.3s ease;
//   }
  
//   .tab-btn:hover {
//     color: var(--primary);
//   }
  
//   .tab-btn.active {
//     transform: translateY(-2px);
//   }
  
//   /* Cursor Trail Effect */
//   .cursor-trail {
//     position: fixed;
//     pointer-events: none;
//     z-index: 9998;
//   }
  
   
//   .trail-dot {
//     position: absolute;
//     width: 8px;
//     height: 8px;
//     background-color: rgba(39, 174, 96, 0.5); /* Changed from purple to green */
//     border-radius: 50%;
//     transform: translate(-50%, -50%);
//     transition: 
//       left 0.1s linear,
//       top 0.1s linear,
//       opacity 0.3s ease;
//   }
  
//   .custom-cursor.active ~ .cursor-trail .trail-dot {
//     background-color: rgba(255, 255, 255, 0.7);
//   }
//   .hexagon-background {
//     position: relative;
//     width: 100%;
//     height: 100vh;
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: var(--light);
//   }
  
//   .hexagon {
//     width: 100px;
//     height: 55px;
//     background-color: var(--primary);
//     position: relative;
//     margin: 27.5px 0;
//     animation: float 5s infinite ease-in-out;
//   }
  
//   .hexagon:before,
//   .hexagon:after {
//     content: '';
//     position: absolute;
//     width: 0;
//     border-left: 50px solid transparent;
//     border-right: 50px solid transparent;
//   }
  
//   .hexagon:before {
//     bottom: 100%;
//     border-bottom: 27.5px solid var(--primary);
//   }
  
//   .hexagon:after {
//     top: 100%;
//     width: 0;
//     border-top: 27.5px solid var(--primary);
//   }
  
//   @keyframes float {
//     0% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-20px);
//     }
//     100% {
//       transform: translateY(0);
//     }
//   }
  
  
//   /* New Styles for Enhanced Elements */
//   .logo-animation {
//     max-width: 120px;
//     margin: 0 auto 20px;
//   }
  
//   .hero-video {
//     border-radius: 12px;
//     overflow: hidden;
//     margin: 20px 0;
//     box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//   }
  
//   .hero-video video {
//     width: 100%;
//     display: block;
//   }
  
//   .success-path {
//     margin: 30px 0;
//   }
  
//   .success-path img {
//     width: 100%;
//     max-width: 600px;
//     margin: 0 auto;
//     display: block;
//   }
  
//   .ai-vector {
//     position: absolute;
//     right: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 40%;
//   }
  
//   /* Pain Points Section */
//   .pain-points {
//     padding: 80px 0;
//     background: rgba(0,184,148,0.05);
//   }
  
//   .pain-grid, .solution-grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 30px;
//     margin-top: 40px;
//   }
  
//   .pain-card, .solution-card {
//     padding: 30px;
//     border-radius: 12px;
//     transition: all 0.3s ease;
//   }
  
//   .pain-card {
//     background: white;
//     border: 1px solid #eee;
//   }
  
//   .solution-card {
//     background: rgba(0,184,148,0.1);
//   }
  
//   .hexagon-shape {
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//   }
  
//   .square-shape {
//     clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
//   }
  
//   /* Solution Section */
//   .solution-showcase {
//     padding: 80px 0;
//   }
  
//   .footer-cta {
//     text-align: center;
//     padding: 40px;
//     background: rgba(0,0,0,0.02);
//     border-radius: 12px;
//     margin-top: 60px;
//   }
  
  
//   /* Enhanced Scroll Animations */
//   [data-animate] {
//     opacity: 0;
//     transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
//   }
  
//   [data-animate="fade-up"] {
//     transform: translateY(40px);
//   }
  
//   [data-animate="fade-down"] {
//     transform: translateY(-40px);
//   }
  
//   [data-animate="fade-left"] {
//     transform: translateX(40px);
//   }
  
//   [data-animate="fade-right"] {
//     transform: translateX(-40px);
//   }
  
//   [data-animate="zoom-in"] {
//     transform: scale(0.9);
//   }
  
//   [data-animate].animate {
//     opacity: 1;
//     transform: none;
//   }
//   /* Staggered Grid Animations */
//   .grid-stagger [data-animate] {
//     transition-delay: calc(var(--index) * 0.1s);
//   }
//   /* Parallax Elements */
//   .parallax-element {
//     transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//   }
//   /* Enhanced Card Hover */
//   .card-3d {
//     transform-style: preserve-3d;
//     transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//   }
  
//   .card-3d:hover {
//     transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
//     box-shadow: 0 30px 50px rgba(0, 0, 0, 0.1);
//   }
  
//   .card-3d::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }
  
//   .card-3d:hover::before {
//     opacity: 1;
//   }
//   /* Animated Gradient Text */
//   .animated-gradient-text {
//     background: linear-gradient(90deg, var(--primary), var(--secondary), var(--primary));
//     background-size: 200% auto;
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//     animation: gradientText 3s linear infinite;
//   }
  
//   @keyframes gradientText {
//     0% { background-position: 0% center; }
//     100% { background-position: 200% center; }
//   }
//   /* Path Drawing Animation */
//   .path-animation {
//     stroke-dasharray: 1000;
//     stroke-dashoffset: 1000;
//     animation: drawPath 3s ease-in-out forwards;
//   }
  
//   @keyframes drawPath {
//     to {
//       stroke-dashoffset: 0;
//     }
//   }
//   /* 3D Perspective Container */
//   .perspective-container {
//     perspective: 1000px;
//   }
  
//   .perspective-item {
//     transform: rotateY(15deg) rotateX(-5deg);
//     transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//   }
  
//   .perspective-container:hover .perspective-item {
//     transform: rotateY(0) rotateX(0);
//   }
//   /* Page Transition Effects */
//   .page-transition {
//     opacity: 0;
//     transform: translateY(20px);
//     transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//   }
  
//   .page-transition.active {
//     opacity: 1;
//     transform: none;
//   }
//   /* Button Micro-interactions */
//   .btn-micro {
//     position: relative;
//     overflow: hidden;
//   }
  
//   .btn-micro::after {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 5px;
//     height: 5px;
//     background: rgba(255, 255, 255, 0.5);
//     opacity: 0;
//     border-radius: 100%;
//     transform: scale(1, 1) translate(-50%, -50%);
//     transform-origin: 50% 50%;
//   }
  
//   .btn-micro:focus:not(:active)::after {
//     animation: ripple 1s ease-out;
//   }
  
//   @keyframes ripple {
//     0% {
//       transform: scale(0, 0);
//       opacity: 0.5;
//     }
//     100% {
//       transform: scale(20, 20);
//       opacity: 0;
//     }
//   }
  
//   /* Scroll Progress */
//   .scroll-progress {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 4px;
//     background: linear-gradient(90deg, var(--primary), var(--secondary));
//     transform-origin: left;
//     transform: scaleX(0);
//     z-index: 1000;
//   }
  
  
  