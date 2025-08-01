document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const leftPanel = document.querySelector('.left-panel');
    
    mobileMenuBtn.addEventListener('click', function() {
        leftPanel.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    leftPanel.classList.remove('active');
                }
                
                // Scroll to section
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active nav item
                document.querySelectorAll('.main-nav li').forEach(item => {
                    item.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            }
        });
    });
    
    // Highlight current section in navigation
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('.content-section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.main-nav li').forEach(item => {
                    item.classList.remove('active');
                    if (item.querySelector('a').getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
});