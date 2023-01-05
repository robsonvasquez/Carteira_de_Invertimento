import Button from "../components/Button";
import Input from "../components/Input";
import LinkGreen from "../components/LinkGreen";
import TopBar from "../components/Bars/TopBar";

export default function Profile(){
  return(
    <>
      <TopBar/>
      <div className="h-screen flex justify-center items-center">
        <div className="w-96 flex flex-col">
          <h1 className={`text-theme-color text-center text-5xl font-bold mb-8`}>Minha conta</h1>
          <div className="flex flex-col justify-center items-center">
            <Input name='name' image="user" placeholder="Nome"/>
            <Input name='email' image="email" placeholder="Email"/>
            <Input name='cpf' image="card" placeholder="CPF"/>
            <Input name='phone' image="phone" placeholder="Telefone"/>
            <Input name='password' image="lock" type="password" placeholder="Senha" />
            <Input name='check_password' image="lock" type="password" placeholder="Confirme a senha" />
            <Button text='Salvar'/>
            <LinkGreen to='/' className='mt-5' text='Excluir minha conta.'/>
          </div>
        </div>
      </div>
    </>
  )
}