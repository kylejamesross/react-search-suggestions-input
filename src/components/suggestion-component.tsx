import { Suggestion } from '../interfaces/suggestion';
import { SuggestionComponentProperties } from '../interfaces/suggestion-component-properties';
import { StyledSuggestion } from './styled-suggestion';

export const SuggestionComponent = <T extends Suggestion>({ suggestion }: SuggestionComponentProperties<T>) => {
    const { id } = suggestion;
    return <StyledSuggestion>{id}</StyledSuggestion>;
};
