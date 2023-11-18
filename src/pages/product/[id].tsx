import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()

  const { isFallback } = useRouter()

  if (isFallback) {
    return <h2>Loading...</h2>
  }

  function handleAddProductBag(product: Product) {
    const { id, imageUrl, name, price, defaultPriceId } = product

    addItem({
      id,
      image: imageUrl,
      name,
      price,
      currency: 'BRL',
      price_id: defaultPriceId,
    })
  }

  return (
    <>
      <Head>
        <title>Produto | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt=""
            priority
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price / 100)}
          </span>
          <p>{product.description}</p>
          <button onClick={() => handleAddProductBag(product)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      props: {},
    }
  }
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: Number(price.unit_amount),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
