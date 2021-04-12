import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #141414;
    --text: #fff;
    --title: #e5e5e5;
    --red: #F72B32;
  }

  html,
  body {
    height: 100%;
    width: 100%;

    background: var(--background);
    color: var(--text);
    line-height: 1.2;
    cursor: default;
  }

  body {
    font-family: 'Roboto','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
