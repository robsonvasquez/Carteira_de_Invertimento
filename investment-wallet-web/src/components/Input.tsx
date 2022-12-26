import { User } from "phosphor-react"

interface InputProps {
  value?: any
  type?: 'text' | 'number'
  read?: boolean
  placeholder: string
  valueChange?: (value: any) => void
  className?: string
}

export default function Input(props : InputProps){
  console.log(props.className)
  return(
    <div className="flex justify-start relative">
      <input
        className={
          `h-10 w-96 p-1 mb-5 pl-9 
          placeholder-[#1E5128]
          font-bold text-base 
          rounded-lg border-2 border-zinc-800 
          focus:outline-none focus:ring-2 focus:border-[#1E5128]
          ${props.className}`
        }
        value={props.value}
        type="text"
        placeholder={ props.placeholder}
        onChange = {e => props.valueChange?.(e.target.value)}
      />
      <User className="absolute ml-2 mt-2" size={24} color="#000000" />
    </div>
      
  );
}