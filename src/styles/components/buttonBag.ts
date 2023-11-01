import { styled } from '..'

export const ContainerButtonBag = styled('button', {
  padding: '0.75rem',
  borderRadius: 6,
  background: '$gray800',
  border: 0,
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  svg: {
    color: '$gray500',
  },

  span: {
    width: 'calc(1.5rem + 3px)',
    color: '$white',
    background: '$green500',
    borderRadius: '50%',
    border: '3px solid $gray900',

    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.6,
    verticalAlign: 'text-bottom',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: 'calc(-0.75rem + 4px)',
    right: 'calc(-0.75rem + 4px)',
  },

  '&:not(:disabled):hover': {
    svg: {
      transition: 'all 0.2s ease-in-out',
      color: '$gray300',
    },
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',

    span: {
      display: 'none',
    },
  },
})
