import TopBar from "../components/Bars/TopBar";
import Input from "../components/Input";

export default function NewActive(){
  return(
    <>
      <TopBar/>
      <div className="flex justify-center mt-20">
        <div className="w-96 flex flex-col">
          <h1 className={`text-theme-color text-center text-5xl font-bold mb-8`}>Cadastrar ativo</h1>
          <div className="flex flex-col justify-center items-center">
            <Input name='active' placeholder="Ativo"/>
            <Input name='date' placeholder="Data da Compra"/>
            <Input name='institution' placeholder="Instituição da compra"/>
            <Input name='amount' placeholder="Quantidade"/>
            <Input name='paidPrice' placeholder="Valor Pago"/>
            <Input name='investedPrice' placeholder="Valor investido"/>
            <Input name='brokerageRate' placeholder="Taxa de corretagem (opcional)"/>
          </div>
        </div>
      </div>
    </>
  );
}