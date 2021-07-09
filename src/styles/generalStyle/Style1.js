const { css } = require("styled-components");

export const Style1 = css`

    .childrenContainer {
        display: none;
        flex-direction: column;
        justify-content: center;
        width: auto;
    }


    .dropDownMenu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: auto;
        padding: 5px;
    }

    .dropDownMenu > :nth-child(1), .childrenContainer * {
        all: initial;

        text-align: center;
        word-wrap: break-word;
        padding: 10px;
        border: 2px solid grey;
        border-radius: 5%;
    }

    .dropDownMenu > :nth-child(1) {
        background-color: rgb(134, 133, 133);
        color: white;
        border:4px solid black;
    }

    .childrenContainer * {
        background-color: lightgrey;
        word-wrap: break-word;
    }
`

