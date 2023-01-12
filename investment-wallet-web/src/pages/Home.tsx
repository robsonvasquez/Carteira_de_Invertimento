import TopBar from "../components/bars/TopBar";
import CardResume from "../components/cards/CardResume";
import CardGraph from "../components/cards/CardGraph";
import BottomBar from "../components/bars/BottomBar";
import CardWallet from "../components/cards/CardWallet";
import Carousel from "../components/carousel/Carousel";

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
        
        <Carousel/>
          
      </div>
      <BottomBar/>
    </div>
  );
}