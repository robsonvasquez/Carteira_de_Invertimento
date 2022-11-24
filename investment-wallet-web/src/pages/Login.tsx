import logoImage from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';

export default function Login() {
  
  const [login, setlogin] = useState('')
  function clica(){
    console.log(login)
  }
  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img className="max-w-[100px]" src={logoImage} alt=""/>
      <h1 className="">Carteira de Investimento</h1>
      <div className="flex flex-col justify-center items-center">
        <Input placeholder="Longin" valueChange={setlogin}/>
        <Input placeholder="Senha"/>
        <Button text='Entrar' onclick={clica}/>
      </div>
    </div>
    
  );

}
