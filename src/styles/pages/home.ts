import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '@media (max-width: 1180px)': {
    maxWidth: '100%',
    padding: '0 2rem',
  },

  '@media (max-width: 768px)': {
    padding: '0 1rem',
    minHeight: 'auto',
  }
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },
    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  },

  '@media (max-width: 768px)': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
      padding: '1.5rem',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5rem',
    },
  },

  '@media (max-width: 480px)': {
    footer: {
      padding: '1rem',
      strong: {
        fontSize: '$md',
      },
      span: {
        fontSize: '$lg',
      }
    },
  }
});