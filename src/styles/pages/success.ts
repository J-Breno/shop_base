import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,
  padding: '0 1rem',

  h1: { fontSize: '$2xl', color: '$gray100', textAlign: 'center' },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': { color: '$green300' },
  },

  '@media (max-width: 768px)': {
    height: 'auto',
    h1: { fontSize: '$xl' },
    p: { fontSize: '$md', marginTop: '1.5rem', maxWidth: '90%' },
    a: { marginTop: '3rem', fontSize: '$md' },
  },

  '@media (max-width: 480px)': {
    h1: { fontSize: '$lg' },
    p: { fontSize: '$sm', marginTop: '1rem' },
    a: { fontSize: '$sm', marginTop: '2rem' },
  }
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: { objectFit: 'cover', width: '100%', height: '100%' },

  '@media (max-width: 480px)': {
    maxWidth: 100,
    height: 110,
    marginTop: '2rem',
  }
});
