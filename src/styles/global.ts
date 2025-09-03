import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },

  // Responsividade base para o site
  '@media (max-width: 768px)': {
    html: {
      fontSize: '14px',
    },
  },

  '@media (max-width: 480px)': {
    html: {
      fontSize: '12px',
    },
  }
});
