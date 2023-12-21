import { Suggestion } from './suggestion';

export interface SuggestionsComponentProperties<T extends Suggestion> {
    suggestions: T[];
}
