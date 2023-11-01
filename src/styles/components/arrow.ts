import { styled } from '..'

export const ContainerArrow = styled('button', {
  width: '8.5rem',
  height: '100vh',
  background: 'linear-gradient(90deg, $gray900 0%, transparent 100%)',
  color: '$gray300',
  border: 0,

  cursor: 'pointer',

  position: 'absolute',

  '&:not(:disabled):hover': {
    color: '$white',
    transition: '0.2s',
  },

  '&:disabled': {
    display: 'none',
  },

  variants: {
    right: {
      true: {
        background: 'linear-gradient(90deg, transparent 0%, $gray900 100%)',
        right: 0,
      },
    },
  },
})
