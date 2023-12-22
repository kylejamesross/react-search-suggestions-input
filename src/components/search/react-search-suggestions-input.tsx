import { ChangeEvent, ChangeEventHandler, useCallback } from 'react';
import { ReactSearchSuggestionsProperties } from '../../interfaces/search/react-search-suggestions-properties';
import { Suggestion } from '../../interfaces/search/suggestions/suggestion';
import { StyledInput } from '../base/styled-input';
import { LeftIcon } from '../icons/left-icon';
import { RightIcon } from '../icons/right-icon';
import { StyledReactSearchSuggestionsInput } from './styled-react-search-suggestions-input';
import { SuggestionsComponent } from './suggestions/suggestions-component';

const ReactSearchSuggestionsInput = <T extends Suggestion>({
    id = 'react-search-suggestions-input',
    onChange: onChangeFromProperties,
    onClear,
    suggestions = [],
    onRenderSuggestion,
    ...properties
}: ReactSearchSuggestionsProperties<T>) => {
    const { value } = properties;

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onChangeFromProperties(event.target.value, event),
        [onChangeFromProperties]
    );

    return (
        <StyledReactSearchSuggestionsInput>
            <LeftIcon />
            <StyledInput type="text" role="searchbox" id={id} onChange={onChange} {...properties} />
            <RightIcon value={value} onClear={onClear} />
            <SuggestionsComponent suggestions={suggestions} onRenderSuggestion={onRenderSuggestion} />
        </StyledReactSearchSuggestionsInput>
    );
};

export { ReactSearchSuggestionsInput };
