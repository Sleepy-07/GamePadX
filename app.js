/* ==========================================================================
   GamePadX — Website & Policy Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Dock Navbar Active Link Scroll Tracking (for Landing Page sections)
    const dockLinks = document.querySelectorAll('.dock-link');
    const mainSections = document.querySelectorAll('main > section[id]');

    if (mainSections.length > 0) {
        window.addEventListener('scroll', () => {
            let currentSection = '';
            mainSections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            if (currentSection) {
                dockLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentSection}` || href === `index.html#${currentSection}`) {
                        dockLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // 3. Table of Contents Scroll Spy (for Privacy & Policies Page)
    const tocLinks = document.querySelectorAll('.toc-link');
    const policySections = document.querySelectorAll('.policy-doc-section[id]');

    if (tocLinks.length > 0 && policySections.length > 0) {
        const updateTocActive = () => {
            let currentPolicyId = '';
            policySections.forEach(sec => {
                const secTop = sec.offsetTop - 140;
                const secHeight = sec.clientHeight;
                if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                    currentPolicyId = sec.getAttribute('id');
                }
            });

            if (currentPolicyId) {
                tocLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentPolicyId}`) {
                        link.classList.add('active');
                    }
                });
            }
        };

        window.addEventListener('scroll', updateTocActive);
        updateTocActive(); // Initial check
    }

    // 4. Mobile Dock Navbar Drawer Toggle
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

    // 5. Interactive Platform Preview Thumbnail Switchers
    const thumbButtons = document.querySelectorAll('.thumb-btn');
    thumbButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const newSrc = btn.getAttribute('data-src');
            const newAlt = btn.getAttribute('data-alt');
            const targetImg = document.getElementById(targetId);

            if (targetImg && newSrc) {
                // Find parent container buttons to toggle active state
                const parentRow = btn.closest('.preview-thumbnails-row');
                if (parentRow) {
                    parentRow.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
                }
                btn.classList.add('active');

                // Smooth fade transition
                targetImg.style.opacity = '0';
                targetImg.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    targetImg.src = newSrc;
                    if (newAlt) targetImg.alt = newAlt;
                    targetImg.style.opacity = '1';
                    targetImg.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // 6. Interactive Multi-Layout Profile Switcher (for Android Screenshot Card)
    const layoutPillBtns = document.querySelectorAll('.layout-pill-btn');
    layoutPillBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetId = btn.getAttribute('data-img-target');
            const newSrc = btn.getAttribute('data-src');
            const targetImg = document.getElementById(targetId);

            if (targetImg && newSrc) {
                const parentSelector = btn.closest('.layout-pill-selector');
                if (parentSelector) {
                    parentSelector.querySelectorAll('.layout-pill-btn').forEach(b => b.classList.remove('active'));
                }
                btn.classList.add('active');

                targetImg.style.opacity = '0';
                setTimeout(() => {
                    targetImg.src = newSrc;
                    targetImg.style.opacity = '1';
                }, 140);
            }
        });
    });
});
