import { useState } from "react";
import colors from "tailwindcss/colors";
import { Bell } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface notificationInterface{
  key: number;
  title: string;
  notification: string;
  time: string; 
}

interface IconNotificationProps{
  notification: notificationInterface[];
  size: number;
  className?: string;
}

export default function IconNotification(props: IconNotificationProps){

  const [iconWeight, setIconWeigth] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const navigate = useNavigate();
  
  return(
    <button 
      className={`
        ${showOptions ? 'cursor-default' : ''}
        relative flex flex-col items-end justify-center 
        rounded-full focus:outline-none`}
      onClick={e => (setIconWeigth(!iconWeight), setShowOptions(!showOptions))}
      onBlur={e => (setIconWeigth(false), setShowOptions(false))}
    >
      <Bell 
        size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }
      />
      <div className={
        `${showOptions ? 'visible' : 'invisible'} 
        absolute top-14 z-50 overflow-x-hidden
        grid grid-cols-1 divide-y divide-gray-300
        h-72 w-96 pl-1 pr-2 rounded-lg rounded-r-[3px]
        bg-white border border-r-0 border-zinc-300
        scrollbar scrollbar-w-1 scrollbar-track-zinc-300 scrollbar-thumb-zinc-400
        scrollbar-track-rounded-full scrollbar-thumb-rounded-full`}>
        {props.notification.map((n : notificationInterface) => (
          
          <div key={n.key} className="w-full items-center justify-center gap-9">
            <div 
              onClick={e => navigate("/newactive")} 
              className="px-4 my-1 flex flex-col rounded-lg hover:bg-sky-50 leading-10"
            >
              <div className="w-full flex justify-between">
                <span className="truncate font-semibold">{n.title}</span>
                <span className="truncate text-zinc-400">{n.time}</span>
              </div>
              <span className="whitespace-normal text-left text-zinc-500 leading-normal">{n.notification}</span>
            </div>
          </div>
          
        ))}            
      </div>
    </button>
  );
}