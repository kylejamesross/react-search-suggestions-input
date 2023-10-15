import { Suggestion } from '../interfaces/suggestion';
import { SuggestionsComponentProperties } from '../interfaces/suggestions-component-properties';
import { StyledSuggestions } from './styled-suggestions';
import { SuggestionComponent } from './suggestion-component';

export const SuggestionsComponent = <T extends Suggestion>({ suggestions }: SuggestionsComponentProperties<T>) => (
    <StyledSuggestions>
        <>
            {suggestions.map((suggestion) => (
                <SuggestionComponent suggestion={suggestion} key={suggestion.id} />
            ))}
        </>
    </StyledSuggestions>
);
