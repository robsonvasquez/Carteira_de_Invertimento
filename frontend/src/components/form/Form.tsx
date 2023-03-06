import { FormEvent , FormHTMLAttributes } from "react";
import {useNavigate } from "react-router-dom";

import { Api } from "../../services/api";
import { useAuth } from "../../authProvider/useAuth";
import { getHeader } from "../../authProvider/util";
import { getUserLocalStorage } from "../../authProvider/util";

import Button from "./Button";
import Input, {InputProps} from "./Input";

interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
  form: {url: string, inputs: InputProps[]};
  button: string;
  onClose?: () => void;
}

export default function Form(props: FormProps){
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit (e: FormEvent) {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    try{
    
      const user = getUserLocalStorage()

      if (!user) {
        await auth.authenticate(data)
        navigate('/')
      }else{
              
        data.user = user.id
      
        await Api.post(props.form.url, data, getHeader())
          .then(function (response) {
            console.log('response',response)
          })
          .catch(function (error) {
            console.error('error', error)
          });

      }
      props.onClose ? props.onClose() : null
    }catch (e){
      console.error('error', e)
    }
  }

  return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {props.form.inputs.map((input : InputProps) => (
        <Input 
          key={input.key}
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
          image={input.image}
          value={input.value}
        />
      ))}
      <Button text={props.button} type='submit'/>
    </form>
  );
}