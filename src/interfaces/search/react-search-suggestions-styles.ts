export interface ReactSearchSuggestionsStyles {
    input?: {
        fontSize: string;
        lineHeight: string;
        padding: string;
        height: string;
        color: string;
        borderColor: string;
        borderStyle: string;
        borderWidth: string;
        focus?: {
            outlineStyle: string;
            outlineWidth: string;
            outlineOffset: string;
            outlineColor: string;
        };
    };
    suggestionsContainer?: {
        maxHeight: string;
        boxShadow: string;
    };
}
