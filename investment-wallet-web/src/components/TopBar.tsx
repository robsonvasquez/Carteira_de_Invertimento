import { UserCircle, Bell, List, PlusCircle, Wallet } from "phosphor-react";


export default function TopBar(){
  return(
    <div className="bg-[#1E5128] w-full h-16 m-0 px-6 flex items-center justify-between">
      <List size={40} color="#ffffff" weight="regular" />
      <div className="flex items-center">
        <Wallet className="mr-2" color="#ffffff" size={48} weight="fill" />
        <h1 className={`text-white text-4xl font-bold`}>Wallet</h1>
      </div>
      <div className="flex">
        <PlusCircle className="mr-5" size={40} color="#ffffff" weight="thin" />
        <Bell className="mr-5" size={40} color="#ffffff" weight="thin" />
        <UserCircle size={40} color="#ffffff" weight="thin" />
      </div>
    </div>
  );
}