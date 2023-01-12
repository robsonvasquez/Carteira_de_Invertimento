import colors from "tailwindcss/colors";
import { CaretRight, CaretLeft } from "phosphor-react";
import CardWallet from "../cards/CardWallet";

interface CarouselProps{
  // element : JSX.Element
}

export default function Carousel(props: CarouselProps){
  return(
    <div className="w-full flex items-center gap-5 justify-center">
      <CaretLeft size={40} color={colors.gray[300]} weight='duotone'/>
      <CardWallet
        key={0}
        title="Carteira 1"
        balance={24.45}
        variation={-4.34}
      />
      <CardWallet
        key={1}
        title="Carteira 2"
        balance={75.26}
        variation={6.72}
      />
      <CardWallet
        key={2}
        title="Carteira 3"
        balance={235.72}
        variation={51.47}
      />
      <CaretRight size={40} color={colors.gray[300]} weight='duotone'/>
    </div>
  );
}