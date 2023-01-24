import CardResume from "../components/cards/CardResume";
import CardGraph from "../components/cards/CardGraph";
import CardWallet from "../components/cards/CardWallet";
import Layout from "../components/layout/Layout";
import Carousel from "../components/carousel/Carousel";

const list = [
  {
    key: 0,
    element: <CardWallet
                key={0}
                title="Carteira 1"
                balance={24.45}
                variation={-4.34}
              />
  },
  {
    key: 1,
    element: <CardWallet
              key={1}
              title="Carteira 2"
              balance={75.26}
              variation={6.72}
            />
  },
  {
    key: 2,
    element: <CardWallet
              key={2}
              title="Carteira 3"
              balance={235.72}
              variation={51.47}
            />
  },
  {
    key: 3,
    element: <CardWallet
              key={3}
              title="Carteira 4"
              balance={5.72}
              variation={23.47}
            />
  },
  {
    key: 4,
    element: <CardWallet
              key={4}
              title="Carteira 5"
              balance={87.29}
              variation={82.73}
            />
  },
]

export default function Home(){
  return (
    <Layout>
      <div className="h-full w-full flex flex-col items-center gap-5 py-5">
          
            <CardResume
              title="Resume da Conta"
              balance={25}
              appliedValue={500}
              profitability={100}
            />
            <CardGraph title="Histórico da Conta"/>
            <Carousel width={400} gap={16} size={3} elements={list}/>
      </div>
    </Layout>
  );
}