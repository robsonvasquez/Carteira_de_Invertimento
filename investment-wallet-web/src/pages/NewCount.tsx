import Button from "../components/Button";
import LinkGreen from "../components/LinkGreen";
import Form from "../components/form/Form";
import { formNewCount } from "../components/form/TypeForms";

export default function NewCount(){
  return(
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 flex flex-col">
        <h1 className={`text-theme-color text-center text-5xl font-bold mb-8`}>Crie sua conta</h1>
        <div className="flex flex-col justify-center items-center">
          <Form inputs={formNewCount}/>
          <span className='text-center text-sm font-bold'>
            Ao se registrar, você aceita nossos&nbsp;
            <LinkGreen to='/' text='termos de uso'/>
            e a nossa&nbsp;
            <LinkGreen to='/' text='política de privacidade.'/>  
          </span>
          
          <Button className='mt-5' text='Cadastrar'/>
          
          <LinkGreen to='/login' className="mt-5" text="Voltar ao login."/>
        </div>
      </div>
    </div>
  );
}