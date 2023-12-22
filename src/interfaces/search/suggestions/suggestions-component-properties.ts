import { ReactNode } from 'react';
import { Suggestion } from './suggestion';

export interface SuggestionsComponentProperties<T extends Suggestion> {
    suggestions: T[];
    onRenderSuggestion: (suggestion: T) => ReactNode;
}
