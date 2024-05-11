export function changeTheme() {
    const changeThemeButton = document.querySelector('.js-change-theme-button');
    const banner = document.querySelector('.stamford-banner');
    const header = document.querySelector('.header');

    let defaultBanner = true;

    changeThemeButton.addEventListener('click', () => {
        if (defaultBanner) {
            banner.src = '/images/banner_students.png';
            header.classList.add('header-student-banner');
        } else {
            banner.src = '/images/RI200-web-banner-stamford-student.png';
            header.classList.remove('header-student-banner');
        };

        defaultBanner = !defaultBanner;
    })
}