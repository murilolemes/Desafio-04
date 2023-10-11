import { BagContainer, BagContent, BagDetails, CloseButton, Content, FooterBag, ImageContainer, OverLay, Title } from "@/styles/components/bagModal";
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
          <BagContent>
            <ImageContainer>
            </ImageContainer>

            <BagDetails>
              <p>Camiseta</p>
              <p><strong>R$ 79,90</strong></p>
              <button>Remover</button>
            </BagDetails>
          </BagContent>

          <BagContent>
            <ImageContainer>
            </ImageContainer>

            <BagDetails>
              <p>Camiseta</p>
              <p><strong>R$ 79,90</strong></p>
              <button>Remover</button>
            </BagDetails>
          </BagContent>

          <BagContent>
            <ImageContainer>
            </ImageContainer>

            <BagDetails>
              <p>Camiseta</p>
              <p><strong>R$ 79,90</strong></p>
              <button>Remover</button>
            </BagDetails>
          </BagContent>

          <FooterBag>
            <div>
              <p>Quantidade <span>3 itens</span></p>
              <p>Valor total <span>R$ 270,00</span></p>
            </div>
            <button>Finalizar compra</button>
          </FooterBag>
        </BagContainer>
      </Content>
    </Dialog.Portal>
  )
}