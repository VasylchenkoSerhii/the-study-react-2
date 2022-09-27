import styled from "styled-components";

export const FeedbackButton = styled.button`
    position: relative;
    min-width: 30%;
    min-height: 45px;
    padding: ${p => `${p.theme.space[3]}px`};
    cursor: pointer;
    border: ${p => `${p.theme.borders.bold} ${p.theme.colors.borderBtn}`};
    border-radius: ${p => p.theme.radii.normal};
    font-size: 16px;
    color: ${p => p.theme.colors.button};
    background-color: ${p => p.theme.colors.bgButton};
    box-shadow: -12px 10px 5px 0px ${p => p.theme.colors.button};
    transform: skewX(20deg);
    transition: transform 250ms linear,
        box-shadow 250ms linear;

    &:hover,
    &:focus {
        transform: scale(0.8) skewX(20deg);
        box-shadow: -7px 5px 0px 0px ${p => p.theme.colors.button};
    }
    
`;
