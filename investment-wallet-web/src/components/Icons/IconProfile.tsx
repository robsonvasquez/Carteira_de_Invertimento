import { useState } from "react";
import colors from "tailwindcss/colors";
import { CaretUp, Gear, SignOut, Triangle, UserCircle } from "phosphor-react";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

interface IconProfileProps{
  size: number;
  className?: string;
}

export default function IconProfile(props: IconProfileProps){

  const [iconWeight, setIconWeigth] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const auth = useAuth();
  const navigate = useNavigate();

  function SingOut(){
    auth.logout();

    navigate('/login');
  }

  return(
    <button
      className="relative flex flex-col items-end justify-center rounded-full focus:outline-none" 
      onClick={e => (setIconWeigth(!iconWeight), setShowOptions(!showOptions))} 
      onBlur={e => (setIconWeigth(false), setShowOptions(false))} 
    >
      <UserCircle  
        size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }        
      />
      {showOptions ? 
        (
          <div
            className="absolute max-w-max flex flex-col
              gap-1 top-14 p-1 rounded-lg bg-white 
              border border-zinc-300"
          >
            <div 
              onClick={e => navigate('/profile')} 
              className="flex items-center justify-start gap-2 px-4 hover:bg-sky-100 rounded-lg"
            >
              <Gear 
                className="pointer-events-none" 
                size={24} 
                color={colors.gray[700]} weight="regular" 
              />
              <span className="truncate text-black font-semibold text-lg leading-10">
                Minha conta
              </span>
            </div>
            <div
              onClick={SingOut} 
              className="flex items-center justify-start gap-2 px-4 hover:bg-sky-100 rounded-lg"
            >
              <SignOut className="pointer-events-none"
                size={24}
                color={colors.red[600]}
                weight="duotone"
              />
              <span className="truncate text-red-600 font-semibold text-lg leading-10">
                Sair
              </span>
            </div>
          </div>
        ) : (<></>)}
    </button>
  );
}