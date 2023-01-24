import { useState } from "react";
import colors from "tailwindcss/colors";
import { List } from "phosphor-react";

interface IconListProps{
  className?: string;
  size?: number;
  onclick: () =>void;
}

export default function IconList({className, size = 40, onclick}: IconListProps){
  
  const [iconWeight, setIconWeigth] = useState(false)
  //const [showOptions, setShowOptions] = useState(false)
  
  return(
    <button 
      className={`flex flex-col rounded-full focus:outline-none ${className}`}
      onClick={e => (setIconWeigth(!iconWeight), onclick())}
      //onBlur={e => (setIconWeigth(!iconWeight), onblur())}
    >
      {iconWeight ? (
        <List size={size} color={colors.white} weight='regular'/>
      ) : (
        <List size={size} color={colors.white} weight='light'/>
      )}
    </button>
  );
}