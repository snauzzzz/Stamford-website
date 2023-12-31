import { formsAndLink } from "../data/forms-and-links.js";

export function renderFormsAndLinks() {
    let formsAndLinksHTML = '';

    formsAndLink.forEach((item) => {
        let checkItemNum = item.itemNumber > 1 ? 'items' : 'item';

        formsAndLinksHTML += `
            <div class="forms-and-links-item">
                <p>${item.name}</p>
                <button>${item.itemNumber} ${checkItemNum}</button>
            </div>
        `;
    });

    const formsAndLinkList = document.querySelector('.forms-and-links-content');
    formsAndLinkList.innerHTML = formsAndLinksHTML;
}