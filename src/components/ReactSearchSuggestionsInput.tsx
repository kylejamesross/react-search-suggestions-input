import { IReactSearchSuggestionsInput } from '../interfaces/IReactSearchSuggestionsInput';

const ReactSearchSuggestionsInput = ({ hi }: IReactSearchSuggestionsInput) => {
    console.info(hi);
    return <input type="search" />;
};

export { ReactSearchSuggestionsInput };
