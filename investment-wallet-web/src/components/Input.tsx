import { useState } from "react";
import { User, LockSimple, EnvelopeSimple, Eye, EyeSlash } from "phosphor-react";

interface InputProps {
  value?: any
  type?: 'text' | 'number'
  read?: boolean
  placeholder: string
  valueChange?: (value: any) => void
  className?: string
  image: string
  eye?: boolean
}




export default function Input(props : InputProps){

  const [showEye,setShowEye] = useState(true);
  
  return(
    <div className="relative flex">
      <input
        className={
          `h-10 w-96 p-1 mb-5 pl-9 
          placeholder-[#1E5128]
          font-bold text-base 
          rounded-lg border-2 border-zinc-800 
          focus:outline-none focus:ring-2 ring-green-800 focus:border-[#1E5128]
          ${props.className}`
        }
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        onChange = {e => props.valueChange?.(e.target.value)}
      />
      {props.image == 'user' ? (<User className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }
     
      {props.image == 'email' ? (<EnvelopeSimple className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }

      {props.image == 'lock' ? (<LockSimple className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }

      {props.eye ? (
          <>
            {showEye ? (<Eye className="absolute right-0 mr-2 mt-2" size={24} color="#000000" weight="regular" onClick={() => setShowEye(!showEye)}/>) : 
            (<EyeSlash className="absolute right-0 mr-2 mt-2" size={24} color="#000000" weight="regular" onClick={() => setShowEye(!showEye)}/>)} 
          </> 
        ) : (<></>)       
      }
      
    </div>
  );
}