
// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Project Filtering Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project Data for Individual Pages
const projectData = {
    'ecommerce': {
        title: 'E-Commerce Platform',
        description: 'A comprehensive e-commerce platform built with Laravel framework. This project features a complete online shopping experience with product management, user authentication, shopping cart functionality, and secure payment processing through Stripe API integration.',
        longDescription: `This e-commerce platform is a full-featured online store that demonstrates advanced Laravel development skills. The application includes:

• **Product Management**: Complete CRUD operations for products with categories, inventory tracking, and image management
• **User Authentication**: Secure registration and login system with email verification
• **Shopping Cart**: Persistent cart functionality with session management
• **Payment Processing**: Integrated Stripe API for secure payment transactions
• **Order Management**: Complete order tracking and management system
• **Admin Dashboard**: Comprehensive admin panel for store management
• **Responsive Design**: Mobile-first design using Bootstrap framework

The project showcases best practices in Laravel development including Eloquent ORM, middleware implementation, form validation, and security measures.`,
        technologies: ['Laravel', 'MySQL', 'Stripe API', 'Bootstrap', 'PHP', 'JavaScript'],
        difficulty: 'Advanced',
        duration: '3 months',
        features: ['Product Management', 'User Authentication', 'Shopping Cart', 'Payment Processing', 'Order Tracking', 'Admin Dashboard'],
        challenges: ['Payment gateway integration', 'Inventory management', 'Security implementation'],
        solutions: ['Stripe API documentation', 'Database optimization', 'Laravel security best practices'],
        rating: 5,
        image: 'E-commerce.png',
        liveDemo: '#',
        github: '#'
    },
    'social': {
        title: 'Social Media Project',
        description: 'A dynamic social media web application built with Laravel 12, featuring user profiles, posts, likes, comments, and real-time interactions. The platform includes modern UI/UX design with Tailwind CSS.',
        longDescription: `This social media platform replicates core features of popular social networks using modern web technologies:

• **User Profiles**: Customizable user profiles with avatar uploads and bio information
• **Post Creation**: Rich text editor with image upload capabilities
• **Social Interactions**: Like, comment, and share functionality
• **Real-time Updates**: Live notifications and activity feeds
• **Friend System**: User connections and friend requests
• **Privacy Controls**: Granular privacy settings for posts and profiles
• **Search Functionality**: Advanced search with filters and suggestions

The project demonstrates advanced Laravel concepts including relationships, events, queues, and real-time features using Laravel Echo and WebSockets.`,
        technologies: ['Laravel 12', 'HTML5', 'JavaScript', 'Tailwind CSS', 'MySQL', 'WebSockets'],
        difficulty: 'Advanced',
        duration: '2.5 months',
        features: ['User Profiles', 'Post Creation', 'Social Interactions', 'Real-time Updates', 'Friend System', 'Privacy Controls'],
        challenges: ['Real-time notifications', 'Image optimization', 'Scalability'],
        solutions: ['Laravel Echo implementation', 'Image compression', 'Database indexing'],
        rating: 4,
        image: 'social.png',
        liveDemo: '#',
        github: '#'
    },
    'auth': {
        title: 'Authentication Systems',
        description: 'A comprehensive authentication system built with PHP and MySQL, featuring user registration, login, logout, and role-based access control. Implements secure password hashing and session management.',
        longDescription: `This authentication system provides a robust foundation for web applications with advanced security features:

• **User Registration**: Complete registration process with email verification
• **Secure Login**: Multi-factor authentication and brute force protection
• **Role-Based Access**: Hierarchical user roles and permissions
• **Password Management**: Secure password reset and change functionality
• **Session Security**: Advanced session management with security tokens
• **Account Lockout**: Protection against brute force attacks
• **Audit Logging**: Complete activity logging for security monitoring

The system follows security best practices including password hashing with bcrypt, CSRF protection, SQL injection prevention, and XSS protection.`,
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Custom MVC', 'bcrypt', 'Sessions'],
        difficulty: 'Intermediate',
        duration: '1.5 months',
        features: ['User Registration', 'Secure Login', 'Role-Based Access', 'Password Management', 'Session Security', 'Audit Logging'],
        challenges: ['Security implementation', 'Session management', 'Password policies'],
        solutions: ['OWASP guidelines', 'Custom session handling', 'Password strength validation'],
        rating: 4,
        image: 'Auth.png',
        liveDemo: '#',
        github: '#'
    },
    'crud': {
        title: 'CRUD System',
        description: 'A comprehensive CRUD (Create, Read, Update, Delete) system built with PHP and MySQL. Features a custom MVC architecture with efficient data management and user-friendly interface.',
        longDescription: `This CRUD system demonstrates fundamental web development concepts with a custom MVC architecture:

• **Data Management**: Complete CRUD operations for multiple entities
• **Custom MVC**: Self-built Model-View-Controller architecture
• **Form Validation**: Client and server-side validation with error handling
• **Search & Filter**: Advanced search functionality with multiple filters
• **Pagination**: Efficient data pagination for large datasets
• **File Upload**: Secure file upload with validation and storage
• **Export Features**: Data export in multiple formats (CSV, PDF)

The system showcases clean code architecture, database optimization, and user experience best practices. It serves as a foundation for building larger applications.`,
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Custom MVC', 'HTML/CSS', 'AJAX'],
        difficulty: 'Intermediate',
        duration: '1 month',
        features: ['Data Management', 'Custom MVC', 'Form Validation', 'Search & Filter', 'Pagination', 'File Upload'],
        challenges: ['MVC architecture design', 'Database optimization', 'User experience'],
        solutions: ['Design patterns', 'Query optimization', 'UI/UX best practices'],
        rating: 3,
        image: 'CRUD.png',
        liveDemo: '#',
        github: '#'
    },
    'login': {
        title: 'Login & Registration System',
        description: 'A secure login and registration system built with PHP and MySQL. Features password hashing with password_hash(), session management, and user-friendly interface.',
        longDescription: `This authentication system provides essential user management functionality:

• **User Registration**: Complete registration with validation and email confirmation
• **Secure Login**: Password hashing using PHP's password_hash() function
• **Session Management**: Secure session handling with timeout features
• **Password Recovery**: Forgot password functionality with email reset
• **Account Verification**: Email verification for new registrations
• **Security Features**: Protection against common vulnerabilities
• **User Dashboard**: Personalized user dashboard after login

The system implements modern security practices and provides a solid foundation for user authentication in web applications.`,
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Custom MVC', 'password_hash()', 'Sessions'],
        difficulty: 'Beginner',
        duration: '2 weeks',
        features: ['User Registration', 'Secure Login', 'Session Management', 'Password Recovery', 'Account Verification', 'User Dashboard'],
        challenges: ['Password security', 'Email integration', 'Session handling'],
        solutions: ['password_hash() function', 'PHPMailer integration', 'Custom session class'],
        rating: 3,
        image: 'php_register.png',
        liveDemo: '#',
        github: '#'
    },
    'todo': {
        title: 'To-Do List Application',
        description: 'A dynamic to-do list application with add, edit, and delete functionality. Features MySQL database storage and user session management for task persistence.',
        longDescription: `This to-do list application provides a complete task management solution:

• **Task Management**: Create, read, update, and delete tasks
• **User Sessions**: Persistent user sessions for task ownership
• **Task Categories**: Organize tasks by categories and priorities
• **Due Dates**: Set and track task deadlines
• **Status Tracking**: Mark tasks as complete, in progress, or pending
• **Search & Filter**: Find tasks quickly with search and filter options
• **Data Persistence**: MySQL database storage for reliable data management

The application demonstrates fundamental web development concepts including database operations, user sessions, and dynamic content management.`,
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Custom MVC', 'Sessions', 'AJAX'],
        difficulty: 'Beginner',
        duration: '1 week',
        features: ['Task Management', 'User Sessions', 'Task Categories', 'Due Dates', 'Status Tracking', 'Search & Filter'],
        challenges: ['Session management', 'Real-time updates', 'Data validation'],
        solutions: ['Custom session handling', 'AJAX implementation', 'Form validation'],
        rating: 2,
        image: 'To-Do-List.png',
        liveDemo: '#',
        github: '#'
    },
    'portfolio': {
        title: 'Personal Portfolio Website',
        description: 'A modern, responsive personal portfolio website showcasing skills, projects, and professional information. Built with HTML, CSS, and JavaScript.',
        longDescription: `This portfolio website demonstrates modern web design and development skills:

• **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
• **Interactive Elements**: Smooth animations and hover effects
• **Project Showcase**: Detailed project presentations with technologies used
• **Skills Section**: Visual representation of technical skills
• **Contact Form**: Functional contact form with validation
• **Modern UI/UX**: Clean, professional design with excellent user experience
• **Performance Optimized**: Fast loading times and optimized assets

The portfolio serves as a professional showcase for web development skills and project experience.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design', 'CSS Grid'],
        difficulty: 'Beginner',
        duration: '1 week',
        features: ['Responsive Design', 'Interactive Elements', 'Project Showcase', 'Skills Section', 'Contact Form', 'Modern UI/UX'],
        challenges: ['Responsive design', 'Cross-browser compatibility', 'Performance optimization'],
        solutions: ['CSS Grid/Flexbox', 'Progressive enhancement', 'Asset optimization'],
        rating: 2,
        image: 'personal.png',
        liveDemo: '#',
        github: '#'
    },
    'restaurant': {
        title: 'Restaurant Website',
        description: 'A modern restaurant website featuring menu display, online ordering, and responsive design. Uses CSS Grid and Flexbox for optimal layout.',
        longDescription: `This restaurant website provides a complete online presence for food establishments:

• **Menu Display**: Beautiful menu presentation with categories and pricing
• **Online Ordering**: Order placement system with cart functionality
• **Responsive Design**: Mobile-optimized layout for all devices
• **Image Gallery**: High-quality food and restaurant photos
• **Contact Information**: Easy access to location and contact details
• **About Section**: Restaurant story and background information
• **Reviews Section**: Customer testimonials and ratings

The website demonstrates advanced CSS techniques and modern web development practices for the food service industry.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'CSS Grid', 'Flexbox'],
        difficulty: 'Beginner',
        duration: '1 week',
        features: ['Menu Display', 'Online Ordering', 'Responsive Design', 'Image Gallery', 'Contact Information', 'Reviews Section'],
        challenges: ['Menu layout design', 'Mobile responsiveness', 'Image optimization'],
        solutions: ['CSS Grid implementation', 'Mobile-first design', 'Image compression'],
        rating: 2,
        image: 'resturaant.png',
        liveDemo: '#',
        github: '#'
    },
    'blog': {
        title: 'Blog Page Template',
        description: 'A modern blog template with article cards, sidebar categories, and responsive design. Features clean typography and excellent readability.',
        longDescription: `This blog template provides a complete blogging platform foundation:

• **Article Cards**: Beautiful article presentation with images and excerpts
• **Category Sidebar**: Organized content navigation by categories
• **Search Functionality**: Quick content search with filters
• **Responsive Layout**: Mobile-optimized reading experience
• **Typography**: Clean, readable typography for optimal content consumption
• **Social Sharing**: Easy social media sharing integration
• **Comment System**: User interaction through comments and discussions

The template demonstrates modern web design principles and content management best practices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Typography', 'Responsive Design'],
        difficulty: 'Beginner',
        duration: '1 week',
        features: ['Article Cards', 'Category Sidebar', 'Search Functionality', 'Responsive Layout', 'Typography', 'Social Sharing'],
        challenges: ['Content layout', 'Typography hierarchy', 'Mobile optimization'],
        solutions: ['CSS Grid layout', 'Type scale system', 'Mobile-first approach'],
        rating: 2,
        image: 'Blog.png',
        liveDemo: '#',
        github: '#'
    }
};

// Project Page Navigation
function createProjectPage(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const projectPage = `
                <div class="project-page">
                    <div class="container">
                        <div class="project-header">
                            <button class="back-btn" onclick="goBack()">
                                <i class="fas fa-arrow-left"></i> Back to Projects
                            </button>
                            <h1>${project.title}</h1>
                            <div class="project-meta">
                                <span class="difficulty">${project.difficulty}</span>
                                <span class="duration">${project.duration}</span>
                                <span class="rating">
                                    ${'★'.repeat(project.rating)}${'☆'.repeat(5 - project.rating)}
                                </span>
                            </div>
                        </div>
                        
                        <div class="project-content">
                            <div class="project-image">
                                <img src="${project.image}" alt="${project.title}">
                            </div>
                            
                            <div class="project-details">
                                <div class="project-description">
                                    <h2>Project Overview</h2>
                                    <p>${project.longDescription}</p>
                                </div>
                                
                                <div class="project-technologies">
                                    <h2>Technologies Used</h2>
                                    <div class="tech-grid">
                                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                                    </div>
                                </div>
                                
                                <div class="project-features">
                                    <h2>Key Features</h2>
                                    <ul>
                                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                                    </ul>
                                </div>
                                
                                <div class="project-challenges">
                                    <h2>Challenges & Solutions</h2>
                                    <div class="challenge-item">
                                        <h3>Challenges:</h3>
                                        <ul>
                                            ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                                        </ul>
                                    </div>
                                    <div class="solution-item">
                                        <h3>Solutions:</h3>
                                        <ul>
                                            ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="project-links">
                                    <a href="${project.liveDemo}" class="btn btn-primary">
                                        <i class="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                    <a href="${project.github}" class="btn btn-secondary">
                                        <i class="fab fa-github"></i> View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    document.body.innerHTML = projectPage;
    document.body.classList.add('project-page-active');

    // Scroll to top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click event listeners to project cards
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project-id');
            if (projectId) {
                createProjectPage(projectId);
            }
        });
    });
});

// Go back function
function goBack() {
    window.location.reload();
}

// Hero Image Animation
function animateHeroImage() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        // Add animation class
        heroImage.classList.add('floating-animation');

        // Remove and re-add animation every 30 seconds to restart it
        setInterval(() => {
            heroImage.classList.remove('floating-animation');
            setTimeout(() => {
                heroImage.classList.add('floating-animation');
            }, 100);
        }, 30000); // 30 seconds = 1/2 minute
    }
}

// Typing Animation for Hero Title
function initTypingAnimation() {
    const titleElement = document.querySelector('.hero h1');
    if (!titleElement) return;

    const textToType = "Hi, I'm Ahmed Ali";
    let currentIndex = 0;
    let isTyping = true;
    let isDeleting = false;

    function typeText() {
        if (isTyping) {
            // Typing phase
            if (currentIndex < textToType.length) {
                titleElement.innerHTML = textToType.substring(0, currentIndex + 1) + '<span class="cursor">|</span>';
                currentIndex++;
                setTimeout(typeText, 50); // Super fast typing at 50ms
            } else {
                // Finished typing, wait then start deleting
                setTimeout(() => {
                    isTyping = false;
                    isDeleting = true;
                    typeText();
                }, 2000); // Wait 2 seconds before deleting
            }
        } else if (isDeleting) {
            // Deleting phase
            if (currentIndex > 0) {
                titleElement.innerHTML = textToType.substring(0, currentIndex - 1) + '<span class="cursor">|</span>';
                currentIndex--;
                setTimeout(typeText, 100); // Faster deletion
            } else {
                // Finished deleting, restart cycle
                setTimeout(() => {
                    isTyping = true;
                    isDeleting = false;
                    typeText();
                }, 1000); // Wait 1 second before restarting
            }
        }
    }

    // Start the animation
    typeText();
}

// Initialize hero image animation when page loads
document.addEventListener('DOMContentLoaded', function () {
    animateHeroImage();
    initTypingAnimation();
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (bar.getBoundingClientRect().top < window.innerHeight - 100) {
            bar.style.width = width;
        }
    });
}

// Initial call and on scroll
animateSkillBars();
window.addEventListener('scroll', animateSkillBars);

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
