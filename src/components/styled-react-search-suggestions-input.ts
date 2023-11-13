import styled from 'styled-components';

export const StyledReactSearchSuggestionsInput = styled.div`
    display: flex;
    position: relative;
    &:focus-within .react-search-suggestions-component {
        opacity: 1;
        visibility: visible;
    }
`;
