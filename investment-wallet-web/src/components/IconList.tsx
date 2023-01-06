import { useState } from "react";
import colors from "tailwindcss/colors";
import { List } from "phosphor-react";

interface IconListProps{
  className: string;
}

export default function IconLIst(props: IconListProps){

  const [iconWeight,setIconWeigth] = useState(false)
  
  return(
    // <Dropdown className="flex items-center" menu={{ items }} placement="topRight" trigger={['click']} arrow={{ pointAtCenter: true }} >
    <div className={`flex items-center ${props.className}`}> 
      <button className="w-14 h-14 rounded-full" onClick={e => setIconWeigth(!iconWeight)} onBlur={e => setIconWeigth(false)}>
        <List size={48} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>
      </button>
    </div>
  );
}