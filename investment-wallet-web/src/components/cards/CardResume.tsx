import ArrowVariation from "../ArrowVariation";
import TitleCard from "./TitleCard";

interface CardResumeProps{
  balance: number;
  appliedValue: number;
  title: string;
  variation: number;
}

export default function CardResume(props: CardResumeProps){

  return(
    <div
      className="
        w-[80%] lg:w-[50%] p-4 gap-5 flex flex-col 
        bg-white border border-zinc-300 rounded-lg"
    >
      <TitleCard>{props.title}</TitleCard> 
      <div className="flex justify-between text-lg font-semibold text-gray-800"> 
        <h2>
          <span className="text-base text-gray-600"> Saldo: </span>
          R$ {0 | props.balance}
        </h2>
        <h2>
          <span className="text-base text-gray-600">Valor aplicado: </span>
           R$ {0 | props.appliedValue}
        </h2>
        <h2 className="flex items-center">
          <span className="text-base text-gray-600">Rentabilidade: </span>
          <ArrowVariation>{props.variation}</ArrowVariation>
        </h2>
          
        
      </div>
    </div>
  );
}