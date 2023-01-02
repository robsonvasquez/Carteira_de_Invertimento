import { UserCircle, Bell, List, PlusCircle, Wallet } from "phosphor-react";
import { Link } from "react-router-dom";


export default function TopBar(){
  return(
    <div className="bg-theme-color w-full h-16 m-0 px-6 flex items-center justify-between">
      <List className="mr-[120px]" size={40} color="#ffffff" weight="regular" />
      <Link to='/' className="flex items-center">
        <Wallet className="mr-1" color="#ffffff" size={48} weight="fill" />
        <h1 className={`text-white text-4xl font-bold`}>Wallet</h1>
      </Link>
      <div className="flex">
        <PlusCircle className="mr-5" size={40} color="#ffffff" weight="thin" />
        <Bell className="mr-5" size={40} color="#ffffff" weight="thin" />
        <UserCircle size={40} color="#ffffff" weight="thin" />
      </div>
    </div>
  );
}