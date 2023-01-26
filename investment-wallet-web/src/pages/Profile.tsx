import LinkGreen from "../components/LinkGreen";
import { formProfile } from "../FormatForms";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import Title from "../components/Title";

export default function Profile(){
  return(
    <Layout>
      <div className="w-screen h-full flex justify-center items-center">
        <div className="flex justify-center mt-4">
          <div className="w-96 flex flex-col">
            <Title>MINHA CONTA</Title>
            <div className="flex flex-col justify-center items-center">
              <Form inputs={formProfile} button="Salvar"/>
              <LinkGreen to='/' className='mt-5' text='Excluir minha conta.'/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}