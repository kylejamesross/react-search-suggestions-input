import { useCallback } from 'react';

const ReactSearchSuggestionsInput = () => {
    const onClick = useCallback(() => {
    }, []);
    console.log(onClick);
    return <input type="search" />;
};

export { ReactSearchSuggestionsInput };
