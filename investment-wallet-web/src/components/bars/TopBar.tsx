import { Link } from "react-router-dom";
import colors from "tailwindcss/colors";
import { Wallet } from "phosphor-react";

import IconProfile from "../Icons/IconProfile";
import IconNotification from "../Icons/IconNotification";
import IconPlus from "../Icons/IconPlus";
import IconList from "../Icons/IconList";

const list = [
  {
    key: 0,
    title: 'Ações subindo',
    notification: 'Sua ação NJ765 aumento de 8%',
    time: '3h',
  },
  {
    key: 1,
    title: 'Carteira Valorizando',
    notification: 'Sua carteira Carteira1 asdjkfasjkdhf asdfhasdlfs asdfaslkdfjlk valorizou de 5%',
    time: '7h',
  },
  {
    key: 2,
    title: 'Ações descendo',
    notification: 'Sua ação KL635 reduziu de 2%',
    time: '1d',
  },
  {
    key: 3,
    title: 'Ações subindo',
    notification: 'Sua ação NJ765 aumento de 8%',
    time: '3h',
  },
  {
    key: 4,
    title: 'Carteira Valorizando',
    notification: 'Sua carteira Carteira1 asdjkfasjkdhf asdfhasdlfs asdfaslkdfjlk valorizou de 5%',
    time: '7h',
  },
  {
    key: 5,
    title: 'Ações descendo',
    notification: 'Sua ação KL635 reduziu de 2%',
    time: '1d',
  },
]


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
      <div className="flex items-center gap-x-5">
        <IconPlus size={40} className={`hidden sm:block`}/>
        <IconNotification notification={list} size={40} className={`hidden sm:block`}/>
        <IconProfile size={40} className=""/>
      </div>
    </div>
  );
}