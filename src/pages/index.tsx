import { GetStaticProps } from "next";
import Image from "next/image";
import Link from 'next/link'
import Head from "next/head";
import { useState } from "react";

import { Handbag } from "@phosphor-icons/react";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { FooterProduct, HomeContainer, Product } from "@/styles/pages/home";
import Arrow from "./components/Arrow";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlider, setCurrentSlider] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlider(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
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
        {products.map(product => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
              className="keen-slider__slide"
            >
              <Product>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt=""
                  priority
                />

                <FooterProduct>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button>
                    <Handbag size={32} />
                  </button>
                </FooterProduct>
              </Product>
            </Link>
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
            disabled={currentSlider === instanceRef.current.track.details.slides.length - 1}
            right
          />
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100)
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2hours
  }
}