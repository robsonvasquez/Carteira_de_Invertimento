import { Link } from "react-router-dom";
import { Wallet } from "phosphor-react";

import Button from '../components/form/Button';
import LinkGreen from "../components/LinkGreen";
import Form from "../components/form/Form";
import {formLogin} from "../components/form/TypeForms";

export default function Login() {

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Link to='/'>
        <div className="flex items-center mb-8">
          <Wallet className="mr-2" color="#1E5128" size={72} weight="fill" />
          <h1 className={`text-theme-color text-6xl font-bold`}>Wallet</h1>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center">
        <Form inputs={formLogin} type='login' button="Entrar" />
        <LinkGreen to='/' className='mt-5' text='Esqueceu sua Senha?'/>
        <Link to={'/newcount'}>
          <Button className='w-60 mt-8' text='Criar nova conta'/>
        </Link>  
      </div>
    </div>    
  );
}
