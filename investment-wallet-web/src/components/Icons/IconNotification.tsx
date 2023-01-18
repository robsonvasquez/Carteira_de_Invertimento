import { useState } from "react";
import colors from "tailwindcss/colors";
import { Bell } from "phosphor-react";

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
  
  return(
    <button 
      className="relative flex flex-col items-end justify-center rounded-full focus:outline-none"
      onClick={e => (setIconWeigth(!iconWeight), setShowOptions(!showOptions))}
      onBlur={e => (setIconWeigth(false), setShowOptions(false))}
    >
      <Bell 
        size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }
      />
      <div className={
        `${showOptions ? 'visible' : 'invisible'} 
        absolute top-14 z-50 overflow-x-hidden
        grid grid-flow-row divide-y divide-gray-300
        h-72 w-96 p-1 pr-3 rounded-lg 
        bg-white border border-gray-300`}>
        {props.notification.map((n : notificationInterface) => (
          <>
            <div key={n.key} className="w-full items-center justify-center">
              <div className="px-4 py-2 flex flex-col my-1 rounded-lg hover:bg-sky-100 leading-7">
                <div className="w-full flex justify-between">
                  <span className="truncate font-semibold">{n.title}</span>
                  <span className="truncate text-zinc-500">{n.time}</span>
                </div>
                <span className="whitespace-normal text-left text-zinc-600">{n.notification}</span>
              </div>
            </div>
          </>
        ))}            
      </div>
    </button>
  );
}