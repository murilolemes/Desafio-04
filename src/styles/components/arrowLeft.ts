import { styled } from "..";

export const ContainerArrowLeft = styled('button', {
  width: '8.5rem',
  height: '100vh',
  background: 'linear-gradient(90deg, $gray900 0%, transparent 100%)',
  color: '$gray300',
  border: 0,

  cursor: 'pointer',

  position: 'absolute',

  '&:not(:disabled):hover': {
    color: '$white',
    transition: '0.2s'
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  }
})