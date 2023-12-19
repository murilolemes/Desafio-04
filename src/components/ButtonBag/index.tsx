import * as Dialog from '@radix-ui/react-dialog'

import { ContainerButtonBag } from '@/styles/components/buttonBag'
import { Handbag } from '@phosphor-icons/react'
import BagModal from '../BagModal'
import { useShoppingCart } from 'use-shopping-cart'

export default function ButtonBag() {
  const cart = useShoppingCart()

  const { cartCount } = cart

  const disabledButton = () => {
    if (!!cartCount && cartCount > 0) {
      return false
    }
    return true
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ContainerButtonBag disabled={disabledButton()}>
          <Handbag size={24} />
          <span>{cartCount}</span>
        </ContainerButtonBag>
      </Dialog.Trigger>
      <BagModal />
    </Dialog.Root>
  )
}
