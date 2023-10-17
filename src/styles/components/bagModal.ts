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

  display: 'flex',
  flexDirection: 'column',

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

  cursor: 'pointer',

  position: 'absolute',
  top: 24,
  right: 24,

  '&:hover': {
    color: '$gray300',
    transition: 'color 0.2s'
  }
})

export const BagContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const BagProduct = styled('div', {
  display: 'flex',
  gap: '1.25rem',
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
    color: '$gray100',
    lineHeight: 1.6,
  },

  'p:first-child': {
    color: '$gray300',
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

export const FooterBag = styled('footer', {
  marginTop: 'auto',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    'p:first-child': {
      display: 'flex',
      justifyContent: 'space-between',
      color: '$gray100',
      fontSize: '1rem',

      span: {
        fontSize: '$md',
        color: '$gray300',
      }
    },

    'p:last-child': {
      display: 'flex',
      justifyContent: 'space-between',
      color: '$gray100',
      fontSize: '$md',
      fontWeight: 'bold',

      span: {
        fontSize: '$xl',
      }
    }
  },

  button: {
    width: '100%',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white',
    background: '$green500',

    padding: '1.25rem 0',
    border: 0,
    borderRadius: 8,
    marginTop: '3rem',

    cursor: 'pointer',
  }
})