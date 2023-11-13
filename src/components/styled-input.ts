import styled from 'styled-components';

export const StyledInput = styled.input`
    box-sizing: border-box;
    font-family:
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        'Noto Sans',
        sans-serif,
        'apple color emoji',
        'segoe ui emoji',
        'Segoe UI Symbol',
        'noto color emoji';
    font-size: 1rem;
    line-height: 1.15;
    margin: 0;
    overflow: visible;
    outline: 0;
    padding: 1rem 3rem;
    height: 3rem;
    width: 100%;
    border-radius: 0.5rem;
    color: rgb(31, 41, 55);
    border-color: rgba(31, 41, 55, 0.2);
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: none;
    &:focus {
        outline-style: solid;
        outline-width: 2px;
        outline-offset: 2px;
        outline-color: rgba(31, 41, 55, 0.2);
    }
`;
