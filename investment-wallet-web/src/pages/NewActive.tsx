import TopBar from "../components/bars/TopBar";
import Form from "../components/form/Form";
import { formNewActive } from "../FormatForms";
import Layout from "../components/layout/Layout";

export default function NewActive(){
  return(
    
    <Layout>
      <div className="w-screen h-full flex justify-center items-center">
        <div className="flex justify-center mt-4">
          <div className="w-96 flex flex-col">
            <h1 className={`text-theme-color text-center text-3xl sm:text-4xl font-bold mb-8`}>Cadastrar ativo</h1>
            <div className="flex flex-col justify-center items-center">
              <Form inputs={formNewActive} button="Cadastrar ativo"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}