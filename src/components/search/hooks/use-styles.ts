import { useMemo } from 'react';
import { ReactSearchSuggestionsStyles } from '../../../interfaces/search/react-search-suggestions-styles';
import { defaultStyles } from '../../../constants/default-styles';

export const useStyles = (userStyles: ReactSearchSuggestionsStyles | undefined): ReactSearchSuggestionsStyles => {
    const styles: ReactSearchSuggestionsStyles = useMemo((): ReactSearchSuggestionsStyles => {
        if (!userStyles) {
            return defaultStyles;
        }
        return {
            input: {
                ...defaultStyles.input,
                ...userStyles?.input,
                focus: {
                    ...defaultStyles.input.focus,
                    ...userStyles?.input?.focus,
                },
            },
            suggestionsContainer: {
                ...defaultStyles.suggestionsContainer,
                ...userStyles?.suggestionsContainer,
            },
        };
    }, [userStyles]);

    return styles;
};
