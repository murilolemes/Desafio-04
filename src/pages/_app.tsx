import { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import Layout from './Layout'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const publicKey = process.env.STRIPE_PUBLIC_KEY
    ? process.env.STRIPE_PUBLIC_KEY
    : ''

  return (
    <CartProvider
      shouldPersist
      cartMode="checkout-session"
      stripe={publicKey}
      currency="BRL"
    >
      <Container>
        <Layout />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
