import { useState } from "react";
import colors from "tailwindcss/colors";
import { List } from "phosphor-react";

interface IconListProps{
  className?: string;
  size?: number;
  onclick: () =>void;
}

export default function IconLIst({className, size = 40, onclick}: IconListProps){
  
  const [iconWeight, setIconWeigth] = useState(false)
  //const [showOptions, setShowOptions] = useState(false)
  
  return(
    <button 
      className={`flex flex-col rounded-full focus:outline-none ${className}`}
      onClick={e => (setIconWeigth(!iconWeight), onclick())}
      //onBlur={e => (setIconWeigth(false), setShowOptions(false))}
    >
      {!iconWeight ? (
        <List size={size} color={colors.white} weight='regular'/>
      ) : (
        <span className="text-2xl font-semiboldbold text-white">X</span>
      )}
      
        
    </button>
  );
}