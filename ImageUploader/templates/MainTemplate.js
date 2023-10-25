// The main template
import {style} from "../css/style.js";

export const mainTemplate = `
    <style>
        ${style}
    </style>
    <dialog id="dialogTest" class="dialog dialog--test">
         <div class="dialog__inner">
               <div class="dialog__header">
                    <button type="button" data-click-action="dialogClose" class="button button--icon button--icon-close" autofocus>
                        Close button
                    </button>
               </div>
               <div class="dialog__body">
                    <h1 class="header header--1">Hello universe</h1>
                    <p>This dialog cannot be closed in Firefox by clicking on the close button, or clicking outside of the dialog
                    whenever 'static formAssociated = true;' is present in the class defining this custom element.</p>
                    <p>The click event that gets fired says my 'event.target' is the custom element instead of the button.
                    I'm logging the event.target of the click event listemers in the console of the developer tools.</p>
                    <p>In Chrome, Safari and Edge the 'event.target' references the close button, or the dialog (if there is a click outside of the dialog) and does allow the user to close it.</p>
               </div>
         </div>
    </dialog>
    </div>
    <main id="main" class="main">
        <button type="button" id="uploadHelp" class="button" data-click-action="openDialogTest">
            Open dialog
        </button>
    </main>
    `;
