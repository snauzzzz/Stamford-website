import { formsAndLink } from "../data/forms-and-links.js";
import { formsAndLinksTag } from "../data/forms-and-links-tags.js";

export function renderFormsAndLinks() {
    let id = 0;
    let formsAndLinksHTML = '';

    formsAndLink.forEach((item) => {
        let checkItemNum = item.message.length > 1 ? 'items' : 'item';

        formsAndLinksHTML += `
            <div class="forms-and-links-item" data-id=${id}>
                <p class="forms-and-links-item-name js-forms-and-links-item-name">${item.name}</p>
                <button class="item-number">${item.message.length} ${checkItemNum}</button>

                <div class="forms-and-links-modal js-forms-and-links-modal-${id}" data-id=${id}>
                    <div class="overlay"></div>
                    <div class="forms-and-links-modal-content">
                        
                        <div class="modal-header"  style="font-weight: 100">
                            Forms & Links
                           <button class="forms-and-links-close-modal-button js-close-modal-button" style="color: rgb(214,214,214);">&#x2715;</button>
                        </div>
                        <div class="modal-body">
                            <table>
                                <tr>
                                    <th>Title</th> 
                                    <th>Added On</th>
                                </tr>
                                
                                ${renderTable(item)}
                            
                            </table>
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

    function renderTable(item) {
        let tableHTML = '';
        const log = item.message;
        log.forEach((message) => {
            let matchingTag;
            formsAndLinksTag.forEach((tag) => {
                if (message.tagId === tag.id) {
                    matchingTag = tag;
                }
            });

            tableHTML += `  
                <tr>
                    <td class="title">${message.title}<button class="tag" style="background-color: ${matchingTag.backgroundColor}">${matchingTag.id}</button></td>
                    <td class="date">${message.date}</td> 
                </tr>
            `;
        });

        return tableHTML;
    }

    const formsAndLinkList = document.querySelector('.forms-and-links-content');
    formsAndLinkList.innerHTML = formsAndLinksHTML;

    document.querySelectorAll('.js-forms-and-links-item-name')
        .forEach((item) => {
            item.addEventListener('click', () => {
                // Get parent .js-announcements-item element
                const parent = item.closest('.forms-and-links-item');

                // Get data-id from parent
                const id = parent.dataset.id;

                const modal = document.querySelector(`.js-forms-and-links-modal-${id}`);

                modal.classList.add('forms-and-links-modal-active')
            })
        });

    document.querySelectorAll('.js-close-modal-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            // Get parent .js-announcements-item element
            const parent = button.closest('.forms-and-links-item');

            // Get data-id from parent
            const id = parent.dataset.id;

            const modal = document.querySelector(`.js-forms-and-links-modal-${id}`);

            modal.classList.remove('forms-and-links-modal-active')
        })
    });
}