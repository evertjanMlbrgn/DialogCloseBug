// language=CSS
export let style = `
    :host {
        display: block;
        position: relative;
        font-family: sans-serif;
        line-height: 1.5;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    .main {
        position: relative;
    }
    
    .header--1 {
        color:cornflowerblue;
    }
    
    /* dialog */

    .dialog {
        background-color: #fff;
        border-radius: 10px;
        color: black;
        border-width: 0;
        padding: 0;
        overflow: hidden;
    }


    .dialog[open] {
        animation: slideUp 0.4s ease-out;
    }

    .dialog.backdrop::backdrop {
        background: #000a !important;
    }

    .dialog__inner {
        display: flex;
        flex-direction: column;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .dialog__header {
        display: flex;
        align-items: start;
        justify-content: end;
        flex: 0 0 auto;
        position: relative;
        width: 100%;
        background-color:aliceblue;
    }

    .dialog__body {
        flex: 1 1 auto;
        overflow-y: auto;
        padding: 0 1em 1em;
        min-height:0;
    }

    /* button */

    .button {
        background-color: rgb(233, 233, 237);
        color: black;
        border-radius: 5px;
        border: 1px solid rgb(227, 227, 227);
        padding: 5px;
    }

    .button .icon {
        vertical-align: middle;
    }

    .button:focus-visible:not([disable]),
    .button:hover:not([disabled]) {
        background-color: rgb(208, 208, 215);
        color: black;
    }
    
    .button--icon-close {
        margin:10px;
        border:3px solid cornflowerblue;
    }

    /* icon */

    .icon {
        background-color: transparent;
        color: black;
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }

    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translate(0, 15px);
        }
        100% {
            opacity: 1;
            transform: translate(0, 0);
        }
    }`;
