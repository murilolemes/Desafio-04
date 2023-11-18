import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { useState } from 'react'

import { useShoppingCart } from 'use-shopping-cart'

import {
  BagContainer,
  BagDetails,
  BagProduct,
  CloseButton,
  Content,
  FooterBag,
  ImageContainer,
  OverLay,
  Title,
} from '@/styles/components/bagModal'
import axios from 'axios'

export default function BagModal() {
  const cart = useShoppingCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { formattedTotalPrice, cartCount, cartDetails, removeItem, clearCart } =
    cart

  const products = Object.values(cartDetails ?? {})

  const Items = () => {
    if (cartCount && cartCount > 1) {
      return 'Itens'
    } else {
      return 'Item'
    }
  }

  async function handleCheckout() {
    try {
      const response = await axios.post('/api/checkout', {
        lineItems: products.map((product) => ({
          price: product.price_id,
          quantity: product.quantity,
        })),
      })

      const { checkouUrl } = response.data
      window.location.href = checkouUrl
      setIsCreatingCheckoutSession(true)
      clearCart()
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <OverLay />
      <Content>
        <Title>
          {!cartCount
            ? 'Sua sacola de compras está vazia!'
            : 'Sacola de compras'}
        </Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <BagContainer>
          {products.map((product) => (
            <BagProduct key={product.id}>
              <ImageContainer>
                {product.image === undefined ? (
                  <></>
                ) : (
                  <Image
                    src={product.image}
                    width={94}
                    height={94}
                    alt=""
                    priority
                  />
                )}
              </ImageContainer>

              <BagDetails>
                <p>{product.name}</p>
                <p>
                  <strong>{product.formattedValue}</strong>
                </p>
                <div>
                  <button onClick={() => removeItem(product.id)}>
                    Remover
                  </button>
                  <p>
                    <span>{product.quantity}</span> Unidade
                    {product.quantity > 1 ? 's' : ''}
                  </p>
                </div>
              </BagDetails>
            </BagProduct>
          ))}
        </BagContainer>
        <FooterBag>
          <div>
            <p>
              Quantidade{' '}
              <span>
                {cartCount} {Items()}
              </span>
            </p>
            <p>
              Valor total <span>{formattedTotalPrice}</span>
            </p>
          </div>
          <button disabled={!cartCount} onClick={handleCheckout}>
            Finalizar compra
          </button>
        </FooterBag>
      </Content>
    </Dialog.Portal>
  )
}
