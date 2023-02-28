import { FormEvent , FormHTMLAttributes } from "react";
import {useNavigate } from "react-router-dom";

import Button from "./Button";
import Input, {InputProps} from "./Input";
import { useAuth } from "../../authProvider/useAuth";

interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
  inputs: InputProps[];
  button: string;
  type?: string;
}

export default function Form(props: FormProps){
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit (e: FormEvent) {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if(props.type === 'login'){
      await auth.authenticate(data)
      navigate('/');
    }
  }

  return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {props.inputs.map((input : InputProps) => (
        <Input key={input.key} name={input.name} placeholder={input.placeholder} type={input.type} image={input.image} value={input.value}/>
      ))}
      <Button text={props.button} type='submit'/>
    </form>
  );
}