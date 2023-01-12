import TopBar from "../components/bars/TopBar";
import CardResume from "../components/cards/CardResume";
import CardGraph from "../components/cards/CardGraph";
import BottomBar from "../components/bars/BottomBar";
import CardWallet from "../components/cards/CardWallet";
import Carousel from "../components/carousel/Carousel";

const list = [
  {
    key: 0,
    element: <CardWallet
                //className="ease-linear duration-700"
                key={0}
                title="Carteira 1"
                balance={24.45}
                variation={-4.34}
              />
  },
  {
    key: 1,
    element: <CardWallet
              //className="ease-linear duration-700"
              key={1}
              title="Carteira 2"
              balance={75.26}
              variation={6.72}
            />
  },
  {
    key: 2,
    element: <CardWallet
              //className="ease-linear duration-700"
              key={2}
              title="Carteira 3"
              balance={235.72}
              variation={51.47}
            />
  },
  {
    key: 3,
    element: <CardWallet
              //className="ease-linear duration-700"
              key={3}
              title="Carteira 4"
              balance={5.72}
              variation={23.47}
            />
  },
  {
    key: 4,
    element: <CardWallet
              //className="ease-linear duration-700"
              key={4}
              title="Carteira 5"
              balance={87.29}
              variation={82.73}
            />
  },
]

export default function Home(){
  return (
    <div className="w-full h-full flex flex-col items-center">
      <TopBar/>
      <div className="w-full flex flex-col items-center">
        <CardResume
          title="Resume da Conta"
          balance={25}
          appliedValue={500}
          profitability={100}
        />
        <CardGraph title="Histórico da Conta"/>
        
        <Carousel size={2} elements={list}/>
        
      </div>
      <BottomBar/>
    </div>
  );
}