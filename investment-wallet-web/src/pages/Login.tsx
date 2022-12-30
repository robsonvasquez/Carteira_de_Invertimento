import { Link } from "react-router-dom";
import { useState } from 'react';
import { Wallet } from "phosphor-react";

import Input from '../components/Input';
import Button from '../components/Button';
import LinkGreen from "../components/LinkGreen";

export default function Login() {
  
  const [login, setlogin] = useState('')
  function clica(){
    console.log(login)
  }
  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Link to='/'>
        <div className="flex items-center mb-8">
          <Wallet className="mr-2" color="#1E5128" size={72} weight="fill" />
          <h1 className={`text-[#1E5128] text-6xl font-bold`}>Wallet</h1>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center">
        <Input image="email" placeholder="Email" valueChange={setlogin}/>
        <Input image="lock" type="password" placeholder="Senha"/>
        <Button text='Entrar'/>
        <LinkGreen to='/' className='mt-5' text='Esqueceu sua Senha?'/>
        <Link to={'/newcount'}>
          <Button className='w-60 mt-8' text='Criar nova conta'/>
        </Link>  
      </div>
    </div>
    
  );

}
