import { ContainerArrowLeft } from "@/styles/components/arrowLeft";
import { CaretLeft } from "@phosphor-icons/react";

interface ArrowLeftProps {
  disabled: boolean;
  onHandleArrowLeft: (e: any) => void;
}

export default function ArrowLeft({ onHandleArrowLeft, disabled }: ArrowLeftProps) {
  function handleArrow(e: any) {
    onHandleArrowLeft(e)
  }

  return (
    <ContainerArrowLeft onClick={handleArrow} disabled={disabled}>
      <CaretLeft size={48} />
    </ContainerArrowLeft>
  )
}