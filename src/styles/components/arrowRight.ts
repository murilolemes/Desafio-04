import { styled } from "..";

export const ContainerArrowRight = styled('button', {
  width: '8.5rem',
  height: '100vh',
  background: 'linear-gradient(90deg, transparent 0%, $gray900 100%)',
  color: '$gray300',
  border: 0,

  cursor: 'pointer',

  position: 'absolute',
  right: 0,

  '&:not(:disabled):hover': {
    color: '$white',
    transition: '0.2s'
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  }
})