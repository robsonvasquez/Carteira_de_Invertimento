import { Placeholder } from "phosphor-react";
import { FormEvent , FormHTMLAttributes } from "react";
import Input, {InputProps} from "../Input";


interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
  inputs: InputProps[];
}

export default function Form(props: FormProps){

  function handleSubmit (e: FormEvent) {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    console.log(data)
  }

  return(
    <form onSubmit={handleSubmit} >
      {props.inputs.map((input : InputProps) => (
        <Input key={input.id} name={input.name} placeholder={input.placeholder} type={input.type} image={input.image}/>
      ))}
    </form>
  );
}