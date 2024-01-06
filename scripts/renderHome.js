import { renderNavBar } from "./nav-bar.js";
import { renderAnnouncementList } from "./announcement-item.js";
import { renderEventCalendar } from "./event-calendar.js";
import { renderFormsAndLinks } from "./forms-and-links.js";
import { renderHeader } from "./header.js";

renderHeader();
renderNavBar();
renderAnnouncementList();
renderEventCalendar();
renderFormsAndLinks();

document.querySelectorAll('.search-tags button') 
    .forEach((button) => {
        button.addEventListener('click', () => {
            let tag = button.innerHTML;
            renderAnnouncementList(tag);
        })
    })
