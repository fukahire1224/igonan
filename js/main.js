// ===== GSAP REGISTRATION =====
gsap.registerPlugin(ScrollTrigger);

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Navigation functionality
    initNavigation();
    
    // GSAP Animations
    initGSAPAnimations();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Contact form functionality
    initContactForm();
    
    // Cursor effects
    initCursorEffects();
    
    // Parallax effects
    initParallaxEffects();
});

// ===== NAVIGATION =====
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// ===== GSAP ANIMATIONS =====
function initGSAPAnimations() {
    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-title .line', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
    })
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.scroll-indicator', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.3');

    // Floating shapes animation
    gsap.to('.shape-1', {
        y: -20,
        rotation: 360,
        duration: 6,
        ease: 'none',
        repeat: -1,
        yoyo: true
    });

    gsap.to('.shape-2', {
        y: -30,
        rotation: -360,
        duration: 8,
        ease: 'none',
        repeat: -1,
        yoyo: true
    });

    gsap.to('.shape-3', {
        y: -15,
        rotation: 360,
        duration: 7,
        ease: 'none',
        repeat: -1,
        yoyo: true
    });

    // Portfolio items animation
    gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
        gsap.fromTo(item, {
            y: 60,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });

    // Skills tags animation
    gsap.utils.toArray('.tag').forEach((tag, index) => {
        gsap.fromTo(tag, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: tag,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });

    // Value items animation
    gsap.utils.toArray('.value-item').forEach((item, index) => {
        gsap.fromTo(item, {
            y: 50,
            opacity: 0,
            scale: 0.9
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.15
        });
    });

    // Contact form animation
    gsap.fromTo('.contact-form', {
        x: 50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Social links animation
    gsap.utils.toArray('.social-link').forEach((link, index) => {
        gsap.fromTo(link, {
            scale: 0,
            rotation: 180
        }, {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.social-links',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.querySelector('.form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('모든 필드를 입력해주세요.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('올바른 이메일 주소를 입력해주세요.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('메시지가 성공적으로 전송되었습니다!', 'success');
            form.reset();
            
            // In a real implementation, you would send the data to your server
            console.log('Form submitted:', { name, email, message });
        });
    }
}

// ===== EMAIL COPY FUNCTIONALITY =====
function copyEmail() {
    const email = 'kane.business@gmail.com';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showNotification('이메일 주소가 복사되었습니다!', 'success');
        }).catch(() => {
            fallbackCopyEmail(email);
        });
    } else {
        fallbackCopyEmail(email);
    }
}

function fallbackCopyEmail(email) {
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('이메일 주소가 복사되었습니다!', 'success');
    } catch (err) {
        showNotification('복사에 실패했습니다. 수동으로 복사해주세요.', 'error');
    }
    
    document.body.removeChild(textArea);
}

// ===== CURSOR EFFECTS =====
function initCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Add cursor effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .tag, .value-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });
}

// ===== PARALLAX EFFECTS =====
function initParallaxEffects() {
    // Parallax for hero background
    gsap.to('.hero-background', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Parallax for floating shapes
    gsap.to('.shape-1', {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    gsap.to('.shape-2', {
        yPercent: -150,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    gsap.to('.shape-3', {
        yPercent: -80,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ===== UTILITY FUNCTIONS =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        color: 'white',
        fontSize: '0.9rem',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ff0080, #ff6b6b)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce resize events
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', debounce(() => {
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
}, 250));

// ===== ADD CUSTOM CURSOR STYLES =====
const cursorStyles = `
.custom-cursor {
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid #00ff88;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    transform: translate(-50%, -50%);
}

.cursor-dot {
    position: fixed;
    width: 8px;
    height: 8px;
    background: #00ff88;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease;
}

.custom-cursor.cursor-hover {
    width: 60px;
    height: 60px;
    border-color: #ff0080;
    background: rgba(255, 0, 128, 0.1);
}

.cursor-dot.cursor-hover {
    width: 6px;
    height: 6px;
    background: #ff0080;
}

@media (max-width: 768px) {
    .custom-cursor,
    .cursor-dot {
        display: none;
    }
}
`;

// Add cursor styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = cursorStyles;
document.head.appendChild(styleSheet); 