import { tag } from "../data/announcements-tags.js";
import { message, sortMessage } from "../data/announcements-message-log.js";

export function renderAnnouncementList() {
    //Sort message to prioritize pinned 
    const sortedMessage = sortMessage(message);
    
    let announcementsHTML = '';
    let background = false;

    sortedMessage.forEach((message) => {
        let matchingTag;
        
        tag.forEach((tag) => {
            if (message.tagId === tag.id) {
                matchingTag = tag;
            }
        });

        let isPinned = message.pinned ? '<img src="/images/stamford2_icons_pin.png">' : '';

        background = !background;
        let backgroundColor = background ? 'gray-background' : 'white-background'; 
        
        announcementsHTML += `
            <div class="announcements-item ${backgroundColor}">
                <button style="background-color: ${matchingTag.backgroundColor};">${matchingTag.id}</button>
            
                <div class="tooltip">
                    <p>${matchingTag.name}</p>
                </div>
                
                <div class="announcements-item-content">
                    <p>${message.content}</p>
                    ${isPinned}
                </div>
                <div class="announcements-item-date"> - <span>${message.date}</span></div>
            </div>
        `;

    });

    const announcementsLog = document.querySelector('.announcements-log');
    announcementsLog.innerHTML = announcementsHTML;
}