import { ReactNode } from 'react';
import { Suggestion } from './suggestion';

export interface SuggestionComponentProperties<T extends Suggestion> {
    suggestion: T;
    onRenderSuggestion: (suggestion: T) => ReactNode;
}
