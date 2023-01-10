import { FormEvent , FormHTMLAttributes } from "react";
import Button from "./Button";
import Input, {InputProps} from "./Input";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import {useNavigate } from "react-router-dom";

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
    
    console.log(data)

    if(props.type === 'login'){

      await auth.authenticate(String(data.email), String(data.password))

      navigate('/');

    }

  }

  return(
    <form onSubmit={handleSubmit} >
      {props.inputs.map((input : InputProps) => (
        <Input key={input.id} name={input.name} placeholder={input.placeholder} type={input.type} image={input.image} value={input.value}/>
      ))}
      <Button text={props.button} type='submit'/>
    </form>
  );
}