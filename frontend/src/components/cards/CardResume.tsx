import ArrowVariation from "../ArrowVariation";
import InformationCard from "./InformationCard";
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
        
        <InformationCard label="Saldo:" text={`R$ ${0 | props.balance}`}/>        

        <InformationCard label="Valor aplicado:" text={`R$ ${0 | props.appliedValue}`}/>

        <InformationCard label="Rentabilidade:">
          <ArrowVariation>{props.variation}</ArrowVariation>
        </InformationCard>
        
      </div>
    </div>
  );
}