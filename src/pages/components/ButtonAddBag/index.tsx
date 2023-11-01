import { ButtonAddBagContainer } from '@/styles/components/buttonAddBag'
import { Handbag } from '@phosphor-icons/react'
import { useShoppingCart } from 'use-shopping-cart'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  priceId: string
}

interface ButtonAddBagProps {
  addProduct: Product
}

export default function ButtonAddBag({ addProduct }: ButtonAddBagProps) {
  const cart = useShoppingCart()

  const { addItem } = cart

  function handleAddProductBag(product: Product) {
    const { id, imageUrl, name, price, priceId } = product

    addItem({
      id,
      image: imageUrl,
      name,
      price,
      price_id: priceId,
      currency: 'BRL',
    })
  }

  return (
    <ButtonAddBagContainer onClick={() => handleAddProductBag(addProduct)}>
      <Handbag size={32} />
    </ButtonAddBagContainer>
  )
}
