export default function Resume(){
  return(
    <div className="w-2/5 my-5 p-4 bg-white border rounded-lg">
      <h1 className="mb-3 text-2xl">Resumo da carteira</h1>
      <div className="flex justify-between">
        <div>
          <h2>Saldo</h2>
          <h3>R$ 224,53</h3>
        </div>
        <div>
          <h2>Valor aplicado</h2>
          <h3>R$ 104,27</h3>
        </div>
        <div>
          <h2>Rentabilidade</h2>
          <h3 className="text-lime-800">134%</h3>
        </div>
      </div>
    </div>
  );
}