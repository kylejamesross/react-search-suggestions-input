import type { Meta, StoryObj } from '@storybook/react';
import { ReactSearchSuggestionsInput } from '..';
import { Suggestion } from '../interfaces/search/suggestions/suggestion';
import { useCallback } from 'react';
import { useArgs } from '@storybook/preview-api';

const component: Meta<typeof ReactSearchSuggestionsInput> = {
    title: 'ReactSearchSuggestionsInput',
    component: ReactSearchSuggestionsInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default component;

type Story = StoryObj<typeof ReactSearchSuggestionsInput>;

const suggestions: Suggestion[] = [
    { id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b811-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b812-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b813-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b814-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b815-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b816-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b817-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b818-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b819-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b81a-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b81b-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b81c-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b81d-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b81e-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b81f-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b820-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b821-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b822-9dad-11d1-80b4-00c04fd430c8' },
    { id: '6ba7b823-9dad-11d1-80b4-00c04fd430c8' },
];

export const Base: Story = {
    args: {
        suggestions,
        value: '',
    },
    render: function Render(arguments_) {
        const [{ value }, updateArguments] = useArgs();

        const onChange = useCallback((newValue: string | null) => updateArguments({ value: newValue }), [updateArguments]);
        const onClear = useCallback(() => updateArguments({ value: '' }), [updateArguments]);

        return <ReactSearchSuggestionsInput {...arguments_} value={value} onChange={onChange} onClear={onClear} />;
    },
};
