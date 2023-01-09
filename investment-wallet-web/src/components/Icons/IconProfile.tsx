import { useState } from "react";
import colors from "tailwindcss/colors";
import { CaretUp, Gear, SignOut, Triangle, UserCircle } from "phosphor-react";
import { Link } from "react-router-dom";

interface IconProfileProps{
  size: number;
  className?: string;
}

export default function IconProfile(props: IconProfileProps){

  const [iconWeight, setIconWeigth] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  return(
    <button 
      className={`relative rounded-full focus:outline-none ${props.className}`}
      // onFocus={e => setIconWeigth(true)}
      onClick={e => (setIconWeigth(!iconWeight), setShowOptions(!showOptions))}
      onBlur={e => (setIconWeigth(false), setShowOptions(false))}
    >
      <UserCircle size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>
        <div className={`
          absolute -right-4 top-14 z-50
          ${showOptions ? 'visible' : 'invisible hidden'}`}
        >
          <div className={`
            flex flex-col p-1 
            gap-1 bg-white 
            border border-gray-300 rounded-lg`}
          >
            <Link className="w-full flex items-center justify-start gap-2 px-4 hover:bg-sky-100 rounded-lg" to="/profile">
              <Gear size={24} color={colors.gray[700]} weight="regular" />
              <span className="truncate text-black font-semibold text-lg leading-10">
                Minha conta
              </span>
            </Link>
            <Link className="w-full flex items-center justify-start gap-2 px-4 hover:bg-sky-100 rounded-lg" to="/login">
              <SignOut size={24} color={colors.red[600]} weight="duotone" />
              <span className="truncate text-red-600 font-semibold text-lg leading-10">
                Sair
              </span>
            </Link>
        </div>
      </div>
    </button>
  );
}