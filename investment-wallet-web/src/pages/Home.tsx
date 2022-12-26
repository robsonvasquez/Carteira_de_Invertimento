import { Link } from "react-router-dom";
import Table from "../components/Table/Table";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

const l = [
  {
    id: 1,
    element: 'Poupança',
  },    
  {
    id: 2,
    element: 'Fundo',
    price: 10
  },
  {
    id: 3,
    element: 'CBD',
    price: 10
  },
  {
    id: 4,
    element: 'Ações',
    price: 10
  }
]

const listHeader = [
  {
    key: 'id',
    value: 'Identificador',
    price: 'Preço',
  },
  {
    key: 'element',
    value: 'Investimento',
    price: 'Preço',
  },
]

const header = ['Identificador', 'Investimento', 'Preço']

export default function Home(){
  return(
    <div className="w-auto h-full flex flex-col items-center">
      <TopBar/>
      <div className="w-full p-8 flex flex-col items-center">
        <div className="w-full bg-white border border-gray-300 rounded-lg flex justify-between p-3">
          <Link to="user">Usuário</Link>
          <Link to="login">Login</Link>
        </div>
        <div className="w-1/2 mt-5 justify-center flex">
          <Table header={header} list={l}/>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}