import { ChangeEvent, ChangeEventHandler, useCallback } from 'react';
import { ReactSearchSuggestionsProperties } from '../interfaces/react-search-suggestions-properties';
import { StyledInput } from './styled-input';
import { StyledReactSearchSuggestionsInput } from './styled-react-search-suggestions-input';
import { StyledReactSearchSuggtionsPreIconWrapper } from './styled-react-search-suggestions-pre-icon-wrapper';
import { StyledReactSearchSuggtionsPostIconWrapper } from './styled-react-search-suggestions-post-icon-wrapper';
import { SearchIcon } from './search-icon';
import { ClearIcon } from './clear-icon';
import { SuggestionsComponent } from './suggestions-component';
import { Suggestion } from '../interfaces/suggestion';

const ReactSearchSuggestionsInput = <T extends Suggestion>({
    id = 'react-search-suggestions-input',
    onChange: onChangeFromProperties,
    suggestions = [],
    ...properties
}: ReactSearchSuggestionsProperties<T>) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onChangeFromProperties(event.target.value, event),
        [onChangeFromProperties]
    );

    return (
        <StyledReactSearchSuggestionsInput>
            <StyledReactSearchSuggtionsPreIconWrapper>
                <SearchIcon />
            </StyledReactSearchSuggtionsPreIconWrapper>
            <StyledInput type="text" role="searchbox" id={id} onChange={onChange} {...properties} />
            <SuggestionsComponent suggestions={suggestions} />
            <StyledReactSearchSuggtionsPostIconWrapper>
                <ClearIcon />
            </StyledReactSearchSuggtionsPostIconWrapper>
        </StyledReactSearchSuggestionsInput>
    );
};

export { ReactSearchSuggestionsInput };
