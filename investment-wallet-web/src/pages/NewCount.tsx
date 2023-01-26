import LinkGreen from "../components/LinkGreen";
import Form from "../components/form/Form";
import { formNewCount } from "../FormatForms";
import Title from "../components/Title";

export default function NewCount(){
  return(
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 flex flex-col">
        <Title>CRIE SUA CONTA</Title>
        <div className="flex flex-col justify-center items-center">
          <Form inputs={formNewCount} button="Cadastrar"/>
          
          <span className='text-center text-sm font-bold mt-5'>
            Ao se registrar, você aceita nossos&nbsp;
            <LinkGreen to='/' text='termos de uso'/>
            e a nossa&nbsp;
            <LinkGreen to='/' text='política de privacidade.'/>  
          </span>
                
          <LinkGreen to='/login' className="mt-5" text="Voltar ao login."/>
        </div>
      </div>
    </div>
  );
}