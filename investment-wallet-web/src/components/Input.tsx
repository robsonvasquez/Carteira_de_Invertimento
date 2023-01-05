import { InputHTMLAttributes } from "react";
import { useState } from "react";
import { User, LockSimple, EnvelopeSimple, Eye, EyeSlash, Phone, IdentificationCard, Password } from "phosphor-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  // name: string
  // value?: any
  // type?: 'text' | 'number' | 'password' | 'email'
  // read?: boolean
  // placeholder: string
  // valueChange?: (value: any) => void
  // className?: string
  image?: string
}

export default function Input(props : InputProps){

  // const[value, setValue] = useState(props.value);

  const [hiddenPassword, setHiddenPassword] = useState(props.type == 'password' ? true : false);
  const [type, setType] = useState(props.type);

  function passwordEye(type: 'text' | 'password'){
    setType(type);
    setHiddenPassword(!hiddenPassword);
  }

  return(
    <div className="relative flex">
      <input
        {...props}
        className={
          `h-10 w-96 p-1 mb-5 pl-9
          placeholder-theme-color
          font-bold text-base
          rounded-lg border-2 border-zinc-800
          focus:outline-none focus:ring-2 ring-green-800 focus:border-theme-color
          ${props.className}`
        }
        type={type}
      />
      {props.image == 'user' ? (<User className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }
     
      {props.image == 'email' ? (<EnvelopeSimple className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }

      {props.image == 'lock' ? (<LockSimple className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>) }

      {props.image == 'phone' ? (<Phone className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>)}
      
      {props.image == 'card' ? (<IdentificationCard className="absolute ml-2 mt-2" size={24} color="#000000" weight="regular" />) : (<></>)}
      
      {props.type == 'password' ? (
          <>
            {hiddenPassword ? (<Eye className="absolute right-0 mr-2 mt-2" size={24} color="#000000" weight="regular" onClick={() => passwordEye('text')}/>) :
              (<EyeSlash className="absolute right-0 mr-2 mt-2" size={24} color="#000000" weight="regular" onClick={() => passwordEye('password')}/>)
            } 
          </> 
        ) : (<></>)       
      }
      
    </div>
  );
}