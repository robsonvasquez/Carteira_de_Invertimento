import { useState } from "react";
import colors from "tailwindcss/colors";
import { List } from "phosphor-react";

interface IconListProps{
  className?: string;
  size: number
}

export default function IconLIst(props: IconListProps){
  
  const [iconWeight, setIconWeigth] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  
  return(
    <button 
      className={`flex flex-col rounded-full focus:outline-none ${props.className}`}
      onClick={e => (setIconWeigth(!iconWeight), setShowOptions(!showOptions))}
      //onBlur={e => (setIconWeigth(false), setShowOptions(false))}
    >
      <List size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>
        
    </button>
  );
}