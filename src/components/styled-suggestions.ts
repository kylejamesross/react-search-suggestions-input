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

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
        width: 12px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        background-color: #aaa;
    }
`;
