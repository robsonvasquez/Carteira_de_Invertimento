
interface CardResumeProps{
  balance: number;
  appliedValue: number;
  title: string;
  profitability: number;
}

export default function CardResume(props: CardResumeProps){

  return(
    <div className="w-[80%] lg:w-[50%] p-4 bg-white border border-zinc-300 rounded-lg">
      <h1 className="mb-3 text-2xl">{props.title}</h1>
      <div className="flex justify-between">
        <div>
          <h2>Saldo</h2>
          <h3>R$ {0 | props.balance}</h3>
        </div>
        <div>
          <h2>Valor aplicado</h2>
          <h3>R$ {0 | props.appliedValue}</h3>
        </div>
        <div>
          <h2>Rentabilidade</h2>
          <h3 className={props.profitability > 0 ? `text-lime-800` : `text-red-600`}>{0 | props.profitability}%</h3>
        </div>
      </div>
    </div>
  );
}