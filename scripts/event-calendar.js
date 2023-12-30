import { event } from "../data/event-calendar-log.js";

export function renderEventCalendar() {
    let eventCalendarHTML = '';
    let background = false;

    event.forEach((eventItem) => {
        background = !background;
        let backgroundColor = background ? 'gray-background' : 'white-background'; 


        eventCalendarHTML += `
            <div class="event ${backgroundColor}">
                <div class="sidebar"></div>
                <p>${eventItem.name}</p>
                <div class="date">&mdash; <span>${eventItem.startDate}</span></div>
            </div>
        `;
    });

    const eventCalendarList = document.querySelector('.event-calendar-list');
    eventCalendarList.innerHTML = eventCalendarHTML;
}