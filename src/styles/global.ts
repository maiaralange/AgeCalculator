import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: hsl(0, 0%, 94%);
    --purple: hsl(259, 100%, 65%);
    --black: hsl(0, 0%, 8%);
    --text-body: hsl(0, 1%, 44%);
    --shadow: hsl(0, 0%, 86%);
    --shape: hsl(0, 0%, 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
