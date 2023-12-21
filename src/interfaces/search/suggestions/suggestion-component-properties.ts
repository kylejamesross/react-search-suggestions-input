import { Suggestion } from './suggestion';

export interface SuggestionComponentProperties<T extends Suggestion> {
    suggestion: T;
}
