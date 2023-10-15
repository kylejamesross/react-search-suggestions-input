import styled from 'styled-components';

export const StyledSuggestions = styled.div`
    max-height: 500px;
    overflow: auto;
    width: 100%;
    position: absolute;
    top: 3.3rem;
    left: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    opacity: 0;
    visiblity: hidden;
    transition: opacity 0.3s ease-in-out;
`;

