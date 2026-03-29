// Header transformation on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Enhanced Parallax
const heroVisual = document.querySelector('.hero-visual img');
const glowBlobs = document.querySelectorAll('.glow-blob');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrollPos * 0.15}px)`;
    }
    
    glowBlobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.1;
        blob.style.transform = `translateY(${scrollPos * speed}px)`;
    });
});

// Card Spotlight Effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Smooth navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(current)) {
            link.style.color = 'var(--text-primary)';
            link.style.background = 'rgba(255, 255, 255, 0.05)';
        } else {
            link.style.color = 'var(--text-secondary)';
            link.style.background = 'transparent';
        }
    });
});
