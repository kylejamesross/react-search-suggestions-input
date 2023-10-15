import { ChangeEvent } from 'react';
import { Suggestion } from './suggestion';

export interface ReactSearchSuggestionsProperties<T extends Suggestion> {
    id?: string | undefined;
    onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    autoComplete?: string | undefined;
    required?: boolean | undefined;
    readOnly?: boolean | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    suggestions?: T[];
}
