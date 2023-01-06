import TopBar from "../components/Bars/TopBar";
import Form from "../components/form/Form";
import { formNewActive } from "../components/form/TypeForms";

export default function NewActive(){
  return(
    <>
      <TopBar/>
      <div className="flex justify-center mt-20">
        <div className="w-96 flex flex-col">
          <h1 className={`text-theme-color text-center text-5xl font-bold mb-8`}>Cadastrar ativo</h1>
          <div className="flex flex-col justify-center items-center">
            <Form inputs={formNewActive} button="Cadastrar ativo"/>
          </div>
        </div>
      </div>
    </>
  );
}