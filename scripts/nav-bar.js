export function renderNavBar() {
    //Toggle logout visibility
    const welcomeButton = document.querySelector('.js-welcome-button');

    welcomeButton.addEventListener('click', () => {
        const logout = document.querySelector('.js-logout');

        if (logout.classList.contains('logout-visible')) {
            logout.classList.remove('logout-visible')
        } else {
            logout.classList.add('logout-visible');
        }
    });

    //Toggle course info modal
    const allocationModal = document.querySelector('.js-allocation-modal');
    const courseInfoButton = document.querySelector('.js-view-allocation-button');
    const closeModalButton = document.querySelector('.js-close-modal-button')

    courseInfoButton.addEventListener('click', () => {
        allocationModal.classList.add('allocation-modal-active');
    });

    closeModalButton.addEventListener('click', () => {
        allocationModal.classList.remove('allocation-modal-active');
    });

    //Toggle dropdown

    const button = document.querySelector('.nav-bar-toggle-visibility');
    //Toggle logout visibility
    const responsiveWelcomeButton = document.querySelector('.nav-bar-responsive .js-welcome-button');

    const navbar = document.querySelector('.nav-bar')
    const navbarResponsive = document.querySelector('.nav-bar-responsive')
    const responsiveLogout = document.querySelector('.js-responsive-logout');

    if (responsiveLogout.classList.contains('logout-visible')) {
        navbarResponsive.classList.toggle('dropdown');
        navbar.classList.toggle('dropdown-navbar');
        navbar.classList.toggle('collapse');
    } else {
        navbarResponsive.classList.toggle('dropdown');
        navbar.classList.toggle('dropdown-navbar');
    }

    responsiveWelcomeButton.addEventListener('click', () => {

        responsiveLogout.classList.toggle('logout-visible');
        
        navbarResponsive.classList.toggle('collapsed');

        if (navbar.classList.contains('collapse')) {
            navbar.classList.remove('collapse')
        } else {
            navbar.classList.add('collapse')
        };

    });

    button.addEventListener('click', () => {
        if (responsiveLogout.classList.contains('logout-visible')) {
            navbarResponsive.classList.toggle('dropdown');
            navbar.classList.toggle('dropdown-navbar');
            navbar.classList.toggle('collapse');
        } else {
            navbarResponsive.classList.toggle('dropdown');
            navbar.classList.toggle('dropdown-navbar');
        }
        
    })

    //Toggle course info modal
    const responsiveAllocationModal = document.querySelector('.nav-bar-responsive .js-allocation-modal');
    const responsiveCourseInfoButton = document.querySelector('.nav-bar-responsive .js-view-allocation-button');
    const responsiveCloseModalButton = document.querySelector('.nav-bar-responsive .js-close-modal-button')

    responsiveCourseInfoButton.addEventListener('click', () => {
        responsiveAllocationModal.classList.add('allocation-modal-active');
    });

    responsiveCloseModalButton.addEventListener('click', () => {
        responsiveAllocationModal.classList.remove('allocation-modal-active');
    });
};