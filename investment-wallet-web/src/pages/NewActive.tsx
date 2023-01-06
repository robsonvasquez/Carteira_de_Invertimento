import TopBar from "../components/Bars/TopBar";
import Input from "../components/form/Input";

export default function NewActive(){
  return(
    <>
      <TopBar/>
      <div className="flex justify-center mt-20">
        <div className="w-96 flex flex-col">
          <h1 className={`text-theme-color text-center text-5xl font-bold mb-8`}>Cadastrar ativo</h1>
          <div className="flex flex-col justify-center items-center">
            <Input name='active' type='text' placeholder="Ativo"/>
            <Input name='date' type='date' placeholder="Data da Compra"/>
            <Input name='institution' type='text' placeholder="Instituição da compra"/>
            <Input name='amount' type='number' placeholder="Quantidade"/>
            <Input name='paidPrice' type='number' placeholder="Valor Pago"/>
            <Input name='investedPrice' type='number' placeholder="Valor investido"/>
            <Input name='brokerageRate' type='number' placeholder="Taxa de corretagem (opcional)"/>
          </div>
        </div>
      </div>
    </>
  );
}