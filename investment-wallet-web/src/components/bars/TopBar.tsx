import { Link } from "react-router-dom";
import colors from "tailwindcss/colors";
import { Wallet } from "phosphor-react";

import IconProfile from "../Icons/IconProfile";
import IconNotification from "../Icons/IconNotification";
import IconPlus from "../Icons/IconPlus";
import IconMenu from "../Icons/IconMenu";
import Logo from "../Logo";

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
  {
    key: 6,
    title: 'Carteira Valorizando',
    notification: 'Sua carteira Carteira1 asdjkfasjkdhf asdfhasdlfs asdfaslkdfjlk valorizou de 5%',
    time: '7h',
  },
  {
    key: 7,
    title: 'Ações descendo',
    notification: 'Sua ação KL635 reduziu de 2%',
    time: '1d',
  },
  {
    key: 8,
    title: 'Carteira Valorizando',
    notification: 'Sua carteira Carteira1 asdjkfasjkdhf asdfhasdlfs asdfaslkdfjlk valorizou de 5%',
    time: '7h',
  },
  {
    key: 9,
    title: 'Ações descendo',
    notification: 'Sua ação KL635 reduziu de 2%',
    time: '1d',
  },
  {
    key: 10,
    title: 'Carteira Valorizando',
    notification: 'Sua carteira Carteira1 asdjkfasjkdhf asdfhasdlfs asdfaslkdfjlk valorizou de 5%',
    time: '7h',
  },
  {
    key: 11,
    title: 'Ações descendo',
    notification: 'Sua ação KL635 reduziu de 2%',
    time: '1d',
  },
]


interface TopBarProps{
  open: boolean;
  onOpen: () => void;
}

export default function TopBar(props: TopBarProps){

  return(
    <div className="w-full max-h-16 flex items-center justify-between py-2 px-5 bg-theme-color">
      <div className="w-40 flex justify-start items-center">
        {props.open ? null :<IconMenu onclick={props.onOpen}/>}
      </div>
      <Link to='/'>
        <Logo/>
      </Link>
      <div className="w-40 flex items-center gap-x-5">
        <IconPlus size={40} className={`hidden sm:block`}/>
        <IconNotification notification={list} size={40} className={`hidden sm:block`}/>
        <IconProfile size={40} className=""/>
      </div>
    </div>
  );
}