import { useState } from "react";
import colors from "tailwindcss/colors";
import { Bell } from "phosphor-react";

interface IconProfileProps{
  className: string;
}

export default function IconProfile(props: IconProfileProps){

  const [iconWeight,setIconWeigth] = useState(false)
  
  return(
    // <Dropdown className="flex items-center" menu={{ items }} placement="topRight" trigger={['click']} arrow={{ pointAtCenter: true }} >
    <div className={`flex items-center ${props.className}`}> 
      <button className="w-14 h-14 rounded-full" onClick={e => setIconWeigth(!iconWeight)} onBlur={e => setIconWeigth(false)}>
        <Bell size={48} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>
      </button>
    </div>
  );
}