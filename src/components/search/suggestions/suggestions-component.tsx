import { Suggestion } from '../../../interfaces/search/suggestions/suggestion';
import { SuggestionsComponentProperties } from '../../../interfaces/search/suggestions/suggestions-component-properties';
import { StyledSuggestions } from './styled/styled-suggestions';
import { SuggestionComponent } from './suggestion-component';

export const SuggestionsComponent = <T extends Suggestion>({ suggestions }: SuggestionsComponentProperties<T>) => (
    <StyledSuggestions className="react-search-suggestions-component">
        <>
            {suggestions.map((suggestion) => (
                <SuggestionComponent suggestion={suggestion} key={suggestion.id} />
            ))}
        </>
    </StyledSuggestions>
);
