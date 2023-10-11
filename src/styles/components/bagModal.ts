import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const OverLay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  minWidth: '30rem',
  background: '$gray800',
  padding: '4.5rem 3rem 3rem',

  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
})

export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$gray100',
  marginBottom: '2rem'
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  color: '$gray500',
  border: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: 24,
  right: 24,
})

export const BagContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const BagContent = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  border: '1px solid red',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const BagDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
  },

  button: {
    width: 'fit-content',
    background: 'transparent',
    color: '$green500',
    border: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
      transition: 'color 0.2s'
    }
  }
})

export const FooterBag = styled('footer', {})