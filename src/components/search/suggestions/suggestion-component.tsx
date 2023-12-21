import { Suggestion } from '../../../interfaces/search/suggestions/suggestion';
import { SuggestionComponentProperties } from '../../../interfaces/search/suggestions/suggestion-component-properties';
import { StyledSuggestion } from './styled/styled-suggestion';

export const SuggestionComponent = <T extends Suggestion>({ suggestion }: SuggestionComponentProperties<T>) => {
    const { id } = suggestion;
    return <StyledSuggestion>{id}</StyledSuggestion>;
};
