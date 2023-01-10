import { Link } from "react-router-dom";

import Table from "../components/table/Table";
import TopBar from "../components/bars/TopBar";
import BottomBar from "../components/bars/BottomBar";
import CardResume from "../components/cards/CardResume";
import CardGraph from "../components/cards/CardGraph";
import CardActive from "../components/cards/CardActive";
import Button from "../components/form/Button";

const l = [
  {
    id: 1,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: -2,
  },    
  {
    id: 2,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: 2,
  },
  {
    id: 3,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: -24,
  },
  {
    id: 4,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: 7,
  }
]

const header = ['Ativo', 'Preço pago', 'Preço Atual', 'Variação', 'Opções']

export default function Home(){
  return(
    <div className="w-full h-full flex flex-col items-center">
      <TopBar/>
      <div className="w-full flex flex-col items-center">
        <CardResume balance={25} appliedValue={500} title={"Resume da Carteira"} profitability={100}/>
        <CardGraph/>
        <div className="flex w-3/4 justify-between items-center">
          <CardActive text="Ações por empresa"/>
          <CardActive text="Tipos de Ações"/>
        </div>
        <div className="w-9/12 mt-5 flex flex-col items-end">
          <Link to="/newactive" className="mb-5">
            <Button image='plus' className='w-52' text='Adicionar ativo'/>
          </Link>
          <Table header={header} list={l}/>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}

