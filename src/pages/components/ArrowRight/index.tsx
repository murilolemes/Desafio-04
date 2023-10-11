import { ContainerArrowRight } from "@/styles/components/arrowRight";
import { CaretRight } from "@phosphor-icons/react";

interface ArrowRightProps {
  disabled: boolean;
  onHandleArrowRight: (e: any) => void;
}

export default function ArrowRight({ onHandleArrowRight, disabled }: ArrowRightProps) {
  function handleArrow(e: any) {
    onHandleArrowRight(e)
  }

  return (
    <ContainerArrowRight onClick={handleArrow} disabled={disabled}>
      <CaretRight size={48} />
    </ContainerArrowRight>
  )
}