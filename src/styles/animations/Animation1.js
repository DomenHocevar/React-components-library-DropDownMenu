const { css } = require("styled-components");

export const Animation1 = css`
    
    .childrenContainer {
        animation: childrenContainerDown;
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        transform-origin: top;
    }

    @keyframes childrenContainerDown {
        0% {
            transform: scaleY(0);
        }
        100% {
            transform: scaleY(1);
        }
    }
`
