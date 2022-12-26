import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { Wallet } from "phosphor-react";

export default function Login() {
  
  const [login, setlogin] = useState('')
  function clica(){
    console.log(login)
  }
  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex items-center mb-8">
        <Wallet className="mr-2" color="#1E5128" size={72} weight="fill" />
        <h1 className={`text-[#1E5128] text-6xl font-bold`}>Wallet</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Input image="User" placeholder="Login" valueChange={setlogin}/>
        <Input image="Lock" placeholder="Senha"/>
        <Button text='Entrar' onclick={clica}/>
        <span className='text-[#1E5128] text-sm font-bold mt-3'>Esqueceu sua Senha?</span>
        <Button className='w-60 mt-12' text='Criar nova conta' onclick={clica}/>
      </div>
    </div>
    
  );

}
