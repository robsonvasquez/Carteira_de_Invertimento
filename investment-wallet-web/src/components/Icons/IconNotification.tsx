import { useState } from "react";
import colors from "tailwindcss/colors";
import { Bell } from "phosphor-react";

interface IconNotificationProps{
  size: number;
  className?: string;
}

export default function IconNotification(props: IconNotificationProps){

  const [iconWeight, setIconWeigth] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  
  return(
    <button 
      className={`relative rounded-full focus:outline-none ${props.className}`}
      onFocus={e => setIconWeigth(!iconWeight)}
      onClick={e => (setIconWeigth(!iconWeight), setShowOptions(!showOptions))}
      onBlur={e => (setIconWeigth(false), setShowOptions(false))}
    >
      <Bell size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>
        <div className={`
          absolute -right-4 top-14 z-50
          ${showOptions ? 'visible' : 'invisible hidden'}`}
        >
          <div className={`
            flex flex-col p-1 
            gap-1 bg-white 
            border border-gray-300 rounded-lg`}
          >
            <span className="truncate">notificação 1</span>
            <span className="truncate">notificação 2</span>
            <span className="truncate">notificação 3</span>
        </div>
      </div>
    </button>
  );
}