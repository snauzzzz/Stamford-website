import { renderNavBar } from "./nav-bar.js";
import { renderAnnouncementList } from "./announcement-item.js";
import { renderEventCalendar } from "./event-calendar.js";
import { renderFormsAndLinks } from "./forms-and-links.js";
import { renderHeader } from "./header.js";
import { event } from "../data/event-calendar-log.js";
import { changeTheme } from "./change-theme.js";

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
