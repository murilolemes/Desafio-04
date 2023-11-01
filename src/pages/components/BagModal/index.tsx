import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'

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

export default function BagModal() {
  const cart = useShoppingCart()

  const {
    formattedTotalPrice,
    cartCount,
    cartDetails,
    removeItem,
    redirectToCheckout,
    stripe,
  } = cart

  console.log(stripe)

  const Items = () => {
    if (cartCount && cartCount > 1) {
      return 'Itens'
    } else {
      return 'Item'
    }
  }

  async function handleCheckout() {
    await redirectToCheckout()
  }
  // console.log(cartDetails)

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
          {Object.values(cartDetails ?? {}).map((product) => (
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
