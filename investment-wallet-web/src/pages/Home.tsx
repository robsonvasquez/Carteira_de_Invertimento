import { Link } from "react-router-dom";

import Table from "../components/Table/Table";
import TopBar from "../components/Bars/TopBar";
import BottomBar from "../components/Bars/BottomBar";
import CardResume from "../components/Cards/CardResume";
import CardGraph from "../components/Cards/CardGraph";
import CardActive from "../components/Cards/CardActive";
import Button from "../components/Button";

const l = [
  {
    id: 1,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: 2,
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
    variation: 2,
  },
  {
    id: 4,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: 2,
  }
]

const header = ['Ativo', 'Preço pago', 'Preço Atual', 'Variação', 'Opções']

export default function Home(){
  return(
    <div className="w-auto h-full flex flex-col items-center">
      <TopBar/>
      <div className="w-full p-8 flex flex-col items-center">
        <div className="w-full bg-white border border-gray-300 rounded-lg flex justify-between p-3">
          <Link to="/user">Usuário</Link>
          <Link to="/profile">Minha conta</Link>
          <Link to="/login">Login</Link>
        </div>
        <CardResume/>
        <CardGraph/>
        <div className="flex w-3/4 justify-between items-center">
          <CardActive text="Ações por empresa"/>
          <CardActive text="Tipos de Ações"/>
        </div>
        <div className="w-9/12 mt-5 flex flex-col items-end">
          <Button image='plus' className='mb-5 w-48' text='Adicionar ativo'/>
          <Table header={header} list={l}/>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}

