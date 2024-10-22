import { renderNavBar } from "scripts/nav-bar.js";
import { renderAnnouncementList } from "scripts/announcement-item.js";
import { renderEventCalendar } from "scripts/event-calendar.js";
import { renderFormsAndLinks } from "scripts/forms-and-links.js";
import { renderHeader } from "scripts/header.js";
import { changeTheme } from "scripts/change-theme.js";

renderHeader();
changeTheme();
renderNavBar();
renderAnnouncementList();
renderEventCalendar();
renderFormsAndLinks();

document.querySelectorAll('.search-tags button') 
    .forEach((button) => {
        button.addEventListener('click', () => {
            let tag = button.innerHTML;
            const searchBar = document.querySelector('.search-bar');
            const searchInput = searchBar.value;
            if (tag === 'Show all') searchBar.value = '';
            renderAnnouncementList(tag, searchInput);
        })
    });

document.querySelector('.search-button')
    .addEventListener('click', () => {
        const searchBar = document.querySelector('.search-bar');
        const searchInput = searchBar.value;
        renderAnnouncementList('', searchInput);
    })

document.querySelector('.search-bar')
    .addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const searchBar = document.querySelector('.search-bar');
            const searchInput = searchBar.value;
            renderAnnouncementList('', searchInput);
        }
})
