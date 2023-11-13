import { ChangeEvent, ChangeEventHandler, useCallback } from 'react';
import { ReactSearchSuggestionsProperties } from '../interfaces/react-search-suggestions-properties';
import { StyledInput } from './styled-input';
import { StyledReactSearchSuggestionsInput } from './styled-react-search-suggestions-input';
import { SuggestionsComponent } from './suggestions-component';
import { Suggestion } from '../interfaces/suggestion';
import { RightIcon } from './right-icon';
import { LeftIcon } from './left-icon';

const ReactSearchSuggestionsInput = <T extends Suggestion>({
    id = 'react-search-suggestions-input',
    onChange: onChangeFromProperties,
    onClear,
    suggestions = [],
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
            <SuggestionsComponent suggestions={suggestions} />
        </StyledReactSearchSuggestionsInput>
    );
};

export { ReactSearchSuggestionsInput };
