import styled from "styled-components";

export const FeedbackButton = styled.button`
    min-width: 30%;
    min-height: 45px;
    padding: ${p => `${p.theme.space[3]}px`};
    cursor: pointer;
    font-size: 16px;
    color: ${p => p.theme.colors.text}
`;
