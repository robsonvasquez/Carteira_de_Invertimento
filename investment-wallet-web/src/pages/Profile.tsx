import Button from "../components/Button";
import Input from "../components/Input";
import LinkGreen from "../components/LinkGreen";
import TopBar from "../components/TopBar";

export default function Profile(){
  return(
    <>
      <TopBar/>
      <div className="h-screen flex justify-center items-center">
        <div className="w-96 flex flex-col">
          <h1 className={`text-[#1E5128] text-center text-5xl font-bold mb-8`}>Minha conta</h1>
          <div className="flex flex-col justify-center items-center">
            <Input image="user" placeholder="Nome"/>
            <Input image="email" placeholder="Email"/>
            <Input image="card" placeholder="CPF"/>
            <Input image="phone" placeholder="Telefone"/>
            <Input image="lock" type="password" placeholder="Senha"/>
            <Input image="lock" type="password" placeholder="Confirme a senha"/>
            <Button text='Salvar'/>
            <LinkGreen to='/' className='mt-5' text='Excluir minha conta.'/>
          </div>
        </div>
      </div>
    </>
  )
}