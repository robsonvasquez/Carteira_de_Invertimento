import { useState, InputHTMLAttributes } from "react";
import colors from "tailwindcss/colors";
import { User, LockSimple, EnvelopeSimple, Eye, EyeSlash, Phone, IdentificationCard, Password } from "phosphor-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  image?: string
}

export default function Input(props : InputProps){

  const[value, setValue] = useState('');
  
  const [hiddenPassword, setHiddenPassword] = useState(props.type == 'password' ? true : false);
  const [type, setType] = useState(props.type == 'date' ? 'text' : props.type);

  function passwordEye(type: 'text' | 'password'){
    setType(type);
    setHiddenPassword(!hiddenPassword);
  }
  
  return(
    <div className="relative flex flex-col">
      {props.value ? (<label className="ml-1 mb-1 font-semibold">{props.placeholder}</label>) : (<></>)}
      <input
        {...props}
        onFocus={props.type == 'date' ? (() => setType('date')) : (() => setType(props.type))}
        onBlur={props.type == 'date' ? (() => setType('text')) : (() => setType(props.type))}
        className={
          `h-10 w-96 p-1 mb-5 ${props.image == undefined ? ('pl-2'): ('pl-9')}
          placeholder-theme-color
          font-bold text-base
          rounded-lg border-2 border-zinc-800
          focus:outline-none focus:ring-2 ring-green-800 focus:border-theme-color
          ${props.className}`
        }
        type={type}
        value={value}
        onChange={(e => setValue(e.target.value))}
      />
      {props.image == 'user' ? (<User className="absolute ml-2 mt-2" size={24} color={colors.black} weight="regular" />) : (<></>) }
     
      {props.image == 'email' ? (<EnvelopeSimple className="absolute ml-2 mt-2" size={24} color={colors.black} weight="regular" />) : (<></>) }

      {props.image == 'lock' ? (<LockSimple className="absolute ml-2 mt-2" size={24} color={colors.black} weight="regular" />) : (<></>) }

      {props.image == 'phone' ? (<Phone className="absolute ml-2 mt-2" size={24} color={colors.black} weight="regular" />) : (<></>)}
      
      {props.image == 'card' ? (<IdentificationCard className="absolute ml-2 mt-2" size={24} color={colors.black} weight="regular" />) : (<></>)}
      
      {props.type == 'password' ? (
          <>
            {hiddenPassword ? (<Eye className="absolute right-0 mr-2 mt-2" size={24} color={colors.black} weight="regular" onClick={() => passwordEye('text')}/>) :
              (<EyeSlash className="absolute right-0 mr-2 mt-2" size={24} color={colors.black} weight="regular" onClick={() => passwordEye('password')}/>)
            }
          </>
        ) : (<></>)
      }
      
    </div>
  );
}