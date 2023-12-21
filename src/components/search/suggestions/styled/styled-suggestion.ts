import styled from 'styled-components';
import { blankButton } from '../../../../base/styled/blank-button';

export const StyledSuggestion = styled.button`
    ${blankButton}
    padding: 1rem;
    background-color: #fff;
    border-color: rgba(31, 41, 55, 0.2);
    border-width: 1px;
    border-style: solid;

    &:hover {
        background-color: rgba(31, 41, 55, 0.03);
    }
    &:active {
        background-color: rgba(31, 41, 55, 0.025);
    }
`;
