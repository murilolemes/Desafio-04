import * as Dialog from '@radix-ui/react-dialog'

import { ContainerButtonBag } from "@/styles/components/buttonBag";
import { Handbag } from "@phosphor-icons/react";
import BagModal from '../BagModal';

export default function ButtonBag() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ContainerButtonBag>
          <Handbag size={24} />
          <span>2</span>
        </ContainerButtonBag>
      </Dialog.Trigger>
      <BagModal />
    </Dialog.Root>
  )
}