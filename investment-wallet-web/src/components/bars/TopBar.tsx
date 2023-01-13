import { Link } from "react-router-dom";
import colors from "tailwindcss/colors";
import { Wallet } from "phosphor-react";

import IconProfile from "../Icons/IconProfile";
import IconNotification from "../Icons/IconNotification";
import IconPlus from "../Icons/IconPlus";
import IconList from "../Icons/IconList";
import { useState, useEffect} from "react";
import { number } from "prop-types";

interface onclickTopBarProps{
  onclick: () => void;
}

export default function TopBar(props: onclickTopBarProps){

  return(
    <div className="bg-theme-color w-full max-h-16 flex items-center justify-between p-2 mb-5">
      <IconList onclick={props.onclick}/>
      <Link to='/' className="flex items-center">
        <Wallet className="" color={colors.white} weight="fill" size="40"/>
        <h1 className={`text-white text-3xl font-bold`}>Wallet</h1>
      </Link>
      <div className="flex items-center">
        <IconPlus size={40} className={`hidden sm:block`}/>
        <IconNotification size={40} className={`hidden sm:block`}/>
        <IconProfile size={40} className=""/>
      </div>
    </div>
  );
}