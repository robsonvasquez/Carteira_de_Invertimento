import { Link } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";

export default function NewCount(){
  return(
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 flex flex-col">
        <h1 className={`text-[#1E5128] text-center text-5xl font-bold mb-8`}>Crie sua conta</h1>
        <div className="flex flex-col justify-center items-center">
          <Input image="email" placeholder="Email"/>
          <Input image="user" placeholder="Nome"/>
          <Input image="lock" eye placeholder="Senha"/>
          <Input image="lock" eye placeholder="Confirme a senha"/>

          <span className='text-center text-sm font-bold'>Ao se registrar, você aceita nossos <span className='text-[#1E5128]'>termos de uso</span> e a nossa <span className='text-[#1E5128]'>política de privacidade.</span></span>
          
          <Button className='mt-5' text='Cadastrar'/>
          
          <Link to='/login' className="mt-5 text-[#1E5128] text-sm font-bold">Voltar ao login.</Link>
        </div>
      </div>
    </div>
  );
}