import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Arrow from './components/Arrow'
import ButtonAddBag from './components/ButtonAddBag'

import { FooterProduct, HomeContainer, Product } from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    priceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlider, setCurrentSlider] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlider(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function handleArrowLeft(e: any) {
    e.stopPropagation() || instanceRef.current?.prev()
  }

  function handleArrowRight(e: any) {
    e.stopPropagation() || instanceRef.current?.next()
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="Keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt=""
                  priority
                />
              </Link>
              <FooterProduct>
                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.price / 100)}
                  </span>
                </div>
                <ButtonAddBag addProduct={product} />
              </FooterProduct>
            </Product>
          )
        })}
      </HomeContainer>

      {loaded && instanceRef.current && (
        <>
          <Arrow
            onHandleArrow={handleArrowLeft}
            disabled={currentSlider === 0}
          />
          <Arrow
            onHandleArrow={handleArrowRight}
            disabled={
              currentSlider ===
              instanceRef.current.track.details.slides.length - 1
            }
            right
          />
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      priceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2hours
  }
}
