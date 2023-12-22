import { Suggestion } from '../../../interfaces/search/suggestions/suggestion';
import { SuggestionsComponentProperties } from '../../../interfaces/search/suggestions/suggestions-component-properties';
import { StyledSuggestions } from './styled/styled-suggestions';

export const SuggestionsComponent = <T extends Suggestion>({ suggestions, onRenderSuggestion }: SuggestionsComponentProperties<T>) => (
    <StyledSuggestions className="react-search-suggestions-component">
        <>{suggestions.map((suggestion) => onRenderSuggestion(suggestion))}</>
    </StyledSuggestions>
);
