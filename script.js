function initializeTailwind() {
    return {
        config(userConfig = {}) {
            return {
                content: [],
                theme: { extend: {} },
                plugins: [],
                ...userConfig,
            }
        },
        theme: { extend: {} }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const config = initializeTailwind().config({
        'elements': {
            'mobileMenu': document.getElementById('mobileMenu'),
            'mobileMenuButtonIcon': document.getElementById('mobileMenuButtonIcon'),
        },
    });

    const isMobileMenuHidden = () => config.elements.mobileMenu.classList.contains('hidden');
    const toggleMobileMenu = function() {
        if (isMobileMenuHidden()){
            config.elements.mobileMenu.classList.remove('hidden');
            config.elements.mobileMenuButtonIcon.classList.replace('fa-bars', 'fa-xmark');
        }else {
            config.elements.mobileMenu.classList.add('hidden');
            config.elements.mobileMenuButtonIcon.classList.replace('fa-xmark', 'fa-bars');
        }
    };

    window.toggleMobileMenu = toggleMobileMenu;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = 80;
                const topOffset = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
                if (!isMobileMenuHidden()) toggleMobileMenu();
            }
        });
    });
});