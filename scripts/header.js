export function renderHeader() {
    // Height of .external-buttons 
    
    const wrapper = document.querySelector('.external-buttons-wrapper');
    const banner = document.querySelector('.stamford-banner')
    const button = document.querySelector('.toggle-visibility');

    button.addEventListener('click', () => {
        wrapper.classList.toggle('slide-down');  
        banner.classList.toggle('toggle-border');    
    });
}