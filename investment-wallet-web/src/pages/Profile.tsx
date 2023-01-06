import LinkGreen from "../components/LinkGreen";
import TopBar from "../components/bars/TopBar";
import { formProfile } from "../components/form/TypeForms";
import Form from "../components/form/Form";

export default function Profile(){
  return(
    <>
      <TopBar/>
      <div className="flex justify-center mt-20">
        <div className="w-96 flex flex-col">
          <h1 className={`text-theme-color text-center text-5xl font-bold mb-8`}>Minha conta</h1>
          <div className="flex flex-col justify-center items-center">
            <Form inputs={formProfile} button="Salvar"/>
            <LinkGreen to='/' className='mt-5' text='Excluir minha conta.'/>
          </div>
        </div>
      </div>
    </>
  )
}