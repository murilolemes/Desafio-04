import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { ImageContainer, SuccessContainer } from '@/styles/pages/success'
import { useShoppingCart } from 'use-shopping-cart'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
    quantity: number
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const cart = useShoppingCart()

  const { clearCart, cartDetails } = cart

  const listProducts = Object.values(cartDetails ?? {})

  if (listProducts.length > 0) {
    clearCart()
  }

  const quantity = products.reduce(
    (acc, accumulator) => {
      const quantity = accumulator.quantity

      acc.sum += quantity

      return acc
    },
    {
      sum: 0,
    },
  )

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <div>
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image
                src={product.imageUrl}
                width={120}
                height={110}
                alt=""
                priority
              />
            </ImageContainer>
          ))}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{quantity.sum}</strong> camiseta{quantity.sum > 1 ? 's' : ''}{' '}
          já está a caminho de sua casa.
        </p>

        <Link href={'/'}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  // const product = session.line_items?.data[0].price?.product as Stripe.Product
  const data = session.line_items?.data

  return {
    props: {
      customerName,
      products: data?.map((dataProduct) => {
        const product = dataProduct.price?.product as Stripe.Product

        return {
          name: product.name,
          imageUrl: product.images[0],
          quantity: dataProduct.quantity,
        }
      }),
    },
  }
}
