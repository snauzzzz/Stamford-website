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

};