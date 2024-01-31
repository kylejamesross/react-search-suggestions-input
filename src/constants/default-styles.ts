import { ReactSearchSuggestionsStyles } from '../interfaces/search/react-search-suggestions-styles';

export const defaultStyles = {
    input: {
        fontSize: '1rem',
        lineHeight: '1.15',
        padding: '1rem 3rem',
        height: '3rem',
        color: 'rgb(31, 41, 55)',
        borderColor: 'rbga(31, 41, 55, 0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        focus: {
            outlineStyle: 'solid',
            outlineWidth: '2px',
            outlineOffset: '2px',
            outlineColor: 'rgba(31, 41, 55, 0.2)',
        },
    },
    suggestionsContainer: {
        maxHeight: '500px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },
} as const satisfies ReactSearchSuggestionsStyles;
