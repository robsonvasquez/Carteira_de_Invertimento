import { useState } from "react";
import { User, LockSimple, EnvelopeSimple, Eye, EyeSlash, Phone, IdentificationCard, Password } from "phosphor-react";

interface InputProps {
  value?: any
  type?: 'text' | 'number' | 'password'
  read?: boolean
  placeholder: string
  valueChange?: (value: any) => void
  className?: string
  image: string
}

export default function Input(props : InputProps){

  function passwordEye(type: 'text' | 'password'){
    setType(type);
    setHiddenPassword(!hiddenPassword);
  }

  const [showEye,setShowEye] = useState(props.type == 'password' ? true : false);
  const [hiddenPassword,setHiddenPassword] = useState(showEye ? false : true);
  const [type, setType] = useState(props.type);
  
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
        type={type}
        placeholder={props.placeholder}
        onChange = {e => props.valueChange?.(e.target.value)}
      />
      {props.image == 'user' ? (<User className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }
     
      {props.image == 'email' ? (<EnvelopeSimple className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }

      {props.image == 'lock' ? (<LockSimple className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }

      {props.image == 'phone' ? (<Phone className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>)}
      
      {props.image == 'card' ? (<IdentificationCard className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>)}
      
      {showEye ? (
          <>
            {hiddenPassword ? (<EyeSlash className="absolute right-0 mr-2 mt-2" size={24} color="#000000" weight="regular" onClick={() => passwordEye('password')}/>) :
            (<Eye className="absolute right-0 mr-2 mt-2" size={24} color="#000000" weight="regular" onClick={() => passwordEye('text')}/>)} 
          </> 
        ) : (<></>)       
      }
      
    </div>
  );
}