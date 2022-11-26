interface InputProps {
  value?: any
  type?: 'text' | 'number'
  read?: boolean
  placeholder: string
  valueChange?: (value: any) => void
}

export default function Input(props : InputProps){
  return(
    <input className="p-1 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:border-blue-500"
      value={props.value}
      type="text"
      placeholder={ props.placeholder}
      onChange = {e => props.valueChange?.(e.target.value)}
    />
      
  );
}