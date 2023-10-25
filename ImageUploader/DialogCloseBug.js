/*jshint esversion: 6 */
import {mainTemplate} from "./templates/MainTemplate.js";

export default class DialogCloseBug extends HTMLElement {

    static formAssociated = true;// (only has effect when browser supports element internals) tells browser to treat custom element like a form control

    dialogTest;

    constructor() {
        super();
        this.#renderTemplate();
        this.#addEventListeners();
        this.dialogTest = this.shadowRoot.querySelector('#dialogTest');
    }

    #renderTemplate() {
            this.attachShadow({mode: 'open', delegatesFocus: false});
            this.shadowRoot.innerHTML = mainTemplate;
    }

    #clickHandlers = {
        'dialogClose': target => {
            let dialog = target.closest('dialog');
            dialog.close();
        },
        'openDialogTest': () => {
            this.dialogTest.showModal();
        },
    };

    #clickHandler = e => {
        let target = e.target;
        console.log('event.target is', target);
        const clickActionElement = target.closest('[data-click-action]');
        const handler = this.#clickHandlers[clickActionElement?.getAttribute('data-click-action')];
        if (handler) {
            e.preventDefault();
            handler(clickActionElement);
        }
    }

    #addEventListeners() {

        this.shadowRoot.addEventListener('click', this.#clickHandler, false);

        this.shadowRoot.addEventListener('click', e => {
            let target = e.target;
            console.log('event.target is', target);

            if (target === this.dialogTest) this.#clickHandlers['dialogClose'](target);
        });

    }

}

customElements.define('dialog-bug-test', DialogCloseBug);
