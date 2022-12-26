import { Wallet } from "phosphor-react";


export default function Logo(){
  return(
    <div className="flex items-center">
      <Wallet className="mr-2" size={48} color="#ffffff" weight="thin" />
      <h1 className="text-white text-4xl font-bold">Wallet</h1>
    </div>
  );
}