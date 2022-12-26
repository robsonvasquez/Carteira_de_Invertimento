import { UserCircle, Bell, List, PlusCircle } from "phosphor-react";
import Logo from "./Logo";

export default function TopBar(){
  return(
    <div className="bg-[#1E5128] w-full h-16 m-0 px-6 flex items-center justify-between">
      <List size={40} color="#ffffff" weight="thin" />
      <Logo/>
      <div className="flex">
        <PlusCircle className="mr-5" size={40} color="#ffffff" weight="thin" />
        <Bell className="mr-5" size={40} color="#ffffff" weight="thin" />
        <UserCircle size={40} color="#ffffff" weight="thin" />
      </div>
    </div>
  );
}