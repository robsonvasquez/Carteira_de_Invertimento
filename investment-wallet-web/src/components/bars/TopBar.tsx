import { Link } from "react-router-dom";
import colors from "tailwindcss/colors";
import { Wallet } from "phosphor-react";

import IconProfile from "../IconProfile";
import IconNotification from "../IconNotification";
import IconPlus from "../IconPlus";
import IconList from "../IconList";

export default function TopBar(){
  return(
    <div className="bg-theme-color w-full h-16 px-5 flex items-center justify-between">
      <IconList className="mr-[152px]"/>
      <Link to='/' className="flex items-center h-full">
        <Wallet className="mr-1" color={colors.white} size={52} weight="fill" />
        <h1 className={`text-white text-4xl font-bold`}>Wallet</h1>
      </Link>
      <div className="flex items-center">
        <IconPlus className="mr-4"/>
        <IconNotification className="mr-4"/>
        <IconProfile/>
      </div>
    </div>
  );
}