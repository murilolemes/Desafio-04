import { BagContainer, BagDetails, BagProduct, CloseButton, Content, FooterBag, ImageContainer, OverLay, Title } from "@/styles/components/bagModal";
import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

export default function BagModal() {
  return (
    <Dialog.Portal>
      <OverLay />
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton><X size={24} /></CloseButton>

        <BagContainer>
          <BagProduct>
            <ImageContainer>
            </ImageContainer>

            <BagDetails>
              <p>Camiseta</p>
              <p><strong>R$ 79,90</strong></p>
              <button>Remover</button>
            </BagDetails>
          </BagProduct>

          <BagProduct>
            <ImageContainer>
            </ImageContainer>

            <BagDetails>
              <p>Camiseta</p>
              <p><strong>R$ 79,90</strong></p>
              <button>Remover</button>
            </BagDetails>
          </BagProduct>

          <BagProduct>
            <ImageContainer>
            </ImageContainer>

            <BagDetails>
              <p>Camiseta</p>
              <p><strong>R$ 79,90</strong></p>
              <button>Remover</button>
            </BagDetails>
          </BagProduct>

        </BagContainer>
        <FooterBag>
          <div>
            <p>Quantidade <span>3 itens</span></p>
            <p>Valor total <span>R$ 270,00</span></p>
          </div>
          <button>Finalizar compra</button>
        </FooterBag>
      </Content>
    </Dialog.Portal>
  )
}