// function initializeTailwind() {
//     return {
//         config(userConfig = {}) {
//             return {
//                 content: [],
//                 theme: { extend: {} },
//                 plugins: [],
//                 ...userConfig,
//             }
//         },
//         theme: { extend: {} }
//     }
// }

// function isMobileMenuHidden(config) {
//     return config.elements.mobileMenu.classList.contains('hidden');
// }

// function toggleMobileMenu(config) {
//     if (isMobileMenuHidden(config)){
//             config.elements.mobileMenu.classList.remove('hidden');
//             config.elements.mobileMenuButtonIcon.classList.replace('fa-bars', 'fa-xmark');
//         }else {
//             config.elements.mobileMenu.classList.add('hidden');
//             config.elements.mobileMenuButtonIcon.classList.replace('fa-xmark', 'fa-bars');
//         }
// }

document.addEventListener('DOMContentLoaded', () => {
    // const config = initializeTailwind().config({
    //     'elements': {
    //         'mobileMenu': document.getElementById('mobileMenu'),
    //         'mobileMenuButtonIcon': document.getElementById('mobileMenuButtonIcon'),
    //     },
    // });

    // document.querySelectorAll('.action-toggleMobileMenu').forEach(element => {
    //     element.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         toggleMobileMenu(config);
    //     });
    // });;

    // document.querySelectorAll('a[href^="#"]').forEach(element => {
    //     element.addEventListener('click', function (event) {
    //         if (this.getAttribute('href') === '#') return;
            
    //         const target = document.querySelector(this.getAttribute('href'));

    //         if (target) {
    //             event.preventDefault();
    //             const navHeight = 80;
    //             const topOffset = target.getBoundingClientRect().top + window.scrollY - navHeight;
    //             window.scrollTo({ top: topOffset, behavior: 'smooth' });
    //             if (!isMobileMenuHidden()) toggleMobileMenu();
    //         }
    //     });
    // });
});