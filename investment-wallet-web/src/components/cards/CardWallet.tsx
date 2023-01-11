import colors from "tailwindcss/colors";
import {ArrowUp, ArrowDown} from "phosphor-react";
import PieGraph from "../graphs/PieGraph";

const data = [
  {
    id: "css",
    label: "css",
    value: 123,
    color: "hsl(245, 70%, 50%)"
  },
  {
    id: "python",
    label: "python",
    value: 519,
    color: "hsl(2, 70%, 50%)"
  },
  {
    id: "ruby",
    label: "ruby",
    value: 411,
    color: "hsl(341, 70%, 50%)"
  },
  {
    id: "rust",
    label: "rust",
    value: 593,
    color: "hsl(131, 70%, 50%)"
  },
  {
    id: "java",
    label: "java",
    value: 239,
    color: "hsl(68, 70%, 50%)"
  }
]

interface CardWalletProps{
  key: number;
  title: string;
  balance: number;
  variation: number;
}

export default function CardWallet(props: CardWalletProps){
  return(
    <div 
      className="
      mb-5 p-4 flex justify-between items-center
      bg-white border border-gray-300 rounded-lg"
    >
      <div className="w-80 h-56 flex justify-center items-center">
        <PieGraph data={data}/>
      </div>  
      <div className="h-full pt-5 pb-10 flex flex-col justify-between">
        <span className="flex items-center justify-center font-semibold">{props.title}</span>

        <div className="w-36 flex justify-between">
          <span className="flex items-center" >R$ {props.balance}</span>        
          <div className="flex items-center">
            {props.variation > 0 ? 
              (<ArrowUp size={16} color={colors.lime[800]}/>):
              (<ArrowDown size={16} color={colors.red[600]}/>)
            }
            <span className={`text-sm ${props.variation > 0 ? 'text-lime-800':'text-red-600'}`}>{Math.abs(props.variation)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}