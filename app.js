/* ==========================================================================
   GamePadX — Professional Landing Page Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Minimal Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Dock Navbar Active Link Scroll Tracking
    const dockLinks = document.querySelectorAll('.dock-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        dockLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Mobile Dock Navbar Drawer Toggle
    const dockMobileToggle = document.getElementById('dockMobileToggle');
    const dockNavLinks = document.getElementById('dockNavLinks');

    if (dockMobileToggle && dockNavLinks) {
        dockMobileToggle.addEventListener('click', () => {
            dockNavLinks.classList.toggle('open');
            const icon = dockMobileToggle.querySelector('i');
            if (icon && window.lucide) {
                const isOpen = dockNavLinks.classList.contains('open');
                icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
                window.lucide.createIcons();
            }
        });

        dockLinks.forEach(link => {
            link.addEventListener('click', () => {
                dockNavLinks.classList.remove('open');
                const icon = dockMobileToggle.querySelector('i');
                if (icon && window.lucide) {
                    icon.setAttribute('data-lucide', 'menu');
                    window.lucide.createIcons();
                }
            });
        });
    }
});
