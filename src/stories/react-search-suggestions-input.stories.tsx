import type { Meta, StoryObj } from '@storybook/react';
import { ReactSearchSuggestionsInput } from '..';
import { Suggestion } from '../interfaces/search/suggestions/suggestion';
import { useCallback } from 'react';
import { useArgs } from '@storybook/preview-api';
import { SuggestionComponent } from '../components/search/suggestions/styled/suggestion-component';

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

        return (
            <ReactSearchSuggestionsInput
                {...arguments_}
                value={value}
                onChange={onChange}
                onClear={onClear}
                onRenderSuggestion={(suggestion) => <SuggestionComponent>{suggestion.id}</SuggestionComponent>}
            />
        );
    },
};

interface SampleSuggestion extends Suggestion {
    id: string;
    header: string;
    description: string;
}

const catBehaviorSuggestions: SampleSuggestion[] = [
    {
        id: '1',
        header: 'Chasing Laser Pointers',
        description: "Cats can't resist the elusive red dot!",
    },
    {
        id: '2',
        header: 'Knocking Things Off Shelves',
        description: "It's not gravity, it's a cat's secret mission.",
    },
    {
        id: '3',
        header: 'Cat Loaf Position',
        description: 'When a cat sits with all paws tucked in—an adorable loaf of fur.',
    },
    {
        id: '4',
        header: 'Box Obsession',
        description: 'Any box, any size. Cats claim it as their kingdom.',
    },
    {
        id: '5',
        header: 'Random Zoomies',
        description: 'Sudden bursts of energy leading to chaotic sprints around the house.',
    },
    {
        id: '6',
        header: 'Head-Butting',
        description: "A cat's way of showing affection, also known as 'head bunting.'",
    },
    {
        id: '7',
        header: 'Kneading',
        description: 'Mimicking their kittenhood, cats knead soft surfaces with their paws.',
    },
    {
        id: '8',
        header: 'Purring',
        description: 'Not just contentment—cats purr for various reasons, including healing.',
    },
];

export const Example: Story = {
    args: {
        suggestions: catBehaviorSuggestions,
        value: '',
    },
    render: function Render(arguments_) {
        const [{ value }, updateArguments] = useArgs();

        const onChange = useCallback((newValue: string | null) => updateArguments({ value: newValue }), [updateArguments]);
        const onClear = useCallback(() => updateArguments({ value: '' }), [updateArguments]);

        return (
            <ReactSearchSuggestionsInput
                {...arguments_}
                value={value}
                onChange={onChange}
                onClear={onClear}
                suggestions={catBehaviorSuggestions}
                onRenderSuggestion={(suggestion: SampleSuggestion) => (
                    <SuggestionComponent>
                        <h3>{suggestion.header}</h3>
                        <p>{suggestion.description}</p>
                    </SuggestionComponent>
                )}
            />
        );
    },
};
