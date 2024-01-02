import { tag } from "../data/announcements-tags.js";
import { message, sortMessage } from "../data/announcements-message-log.js";

export function renderAnnouncementList() {
    //Sort message to prioritize pinned 
    const sortedMessage = sortMessage(message);
    //Assign id
    let id = 0;
    
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
            <div class="announcements-item ${backgroundColor} js-announcements-item" data-id=${id}>
                <button class="tag-button" style="background-color: ${matchingTag.backgroundColor};">${matchingTag.id}</button>
            
                <div class="tooltip">
                    <p>${matchingTag.name}</p>
                </div>
                
                <div class="announcements-item-content js-announcements-item-content">
                    <p>${message.content}</p>
                    ${isPinned}
                </div>
                <div class="announcements-item-date"> - <span>${message.date}</span></div>
                
                <div class="announcements-modal js-announcements-modal-${id}" data-id=${id}>
                    <div class="overlay"></div>
                    <div class="announcements-modal-content">
                        
                        <div class="modal-header" style="font-weight: 100">
                           Announcement
                           <button class="announcements-close-modal-button js-close-modal-button" style="color: rgb(214,214,214);">&#x2715;</button>
                        </div>
                        <div class="modal-body">
                            <p>Title : <span>${message.modal.title}</span></p>
                            <p style="margin-bottom: 5px">Additional Details :</p>
                            <span style="display: block;">
                                ${message.modal.additionalDetails}
                            </span>
                            <p>Attachment : <span>${message.modal.attachment}</p>
                            <p>Posted by : <span>${message.modal.author}</p>
                            <p>Added On : <span>${message.modal.addedDate}</p>
                        </div>
                        <div class="modal-footer">
                            <button class="js-close-modal-button">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        id++;
    });

    const announcementsLog = document.querySelector('.announcements-log');
    announcementsLog.innerHTML = announcementsHTML;

    document.querySelectorAll('.js-announcements-item-content p')
        .forEach((item) => {
            item.addEventListener('click', () => {
                // Get parent .js-announcements-item element
                const parent = item.closest('.js-announcements-item');

                // Get data-id from parent
                const id = parent.dataset.id;

                const modal = document.querySelector(`.js-announcements-modal-${id}`);

                modal.classList.add('announcements-modal-active')
            })
        });

    document.querySelectorAll('.js-close-modal-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            // Get parent .js-announcements-item element
            const parent = button.closest('.js-announcements-item');

            // Get data-id from parent
            const id = parent.dataset.id;

            const modal = document.querySelector(`.js-announcements-modal-${id}`);

            modal.classList.remove('announcements-modal-active')
        })
    });
}