import { event } from "../data/event-calendar-log.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function renderEventCalendar() {

    let eventCalendarHTML = '';
    let background = false;

    event.forEach((eventItem) => {

        background = !background;
        let backgroundColor = background ? 'gray-background' : 'white-background'; 

        let endDateString = '';
        if (eventItem.duration) {
            const startDate = dayjs(eventItem.startDate);
            const duration = eventItem.duration;

            const [num, unit] = duration.split(' ');

            const endDate = startDate.add(Number(num), unit);

            endDateString = ` to ${endDate.format('DD MMM YYYY')}`;
        }
        

        eventCalendarHTML += `
            <div class="event ${backgroundColor}">
                <div class="sidebar"></div>
                <p>${eventItem.name}</p>
                <div class="date">&mdash; <span>${eventItem.startDate} ${endDateString}</span></div>
            </div>
        `;
    });

    const eventCalendarList = document.querySelector('.event-calendar-list');
    eventCalendarList.innerHTML = eventCalendarHTML;
}