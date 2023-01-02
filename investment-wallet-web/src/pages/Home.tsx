import { Link } from "react-router-dom";

import Table from "../components/Table/Table";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import CardResume from "../components/CardResume";
import CardGraph from "../components/CardGraph";
import CardActive from "../components/CardActive";

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
          <CardActive/>
          <CardActive/>
        </div>
        <div className="w-9/12 mt-5 justify-center flex">
          <Table header={header} list={l}/>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}

