import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '0 2rem',

  '@media (max-width: 1024px)': {
    padding: '0 1.5rem',
  },

  '@media (max-width: 768px)': {
    alignItems: 'center',
    padding: '0 1rem',
  }
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',

  img: {
    maxWidth: '100%',
    height: 'auto',
  },

  '@media (max-width: 768px)': {
    padding: '1.5rem 0',
  },

  '@media (max-width: 480px)': {
    padding: '1rem 0',
  }
});
