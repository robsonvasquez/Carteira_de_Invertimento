import colors from "tailwindcss/colors";
import { Gear, UserCircle, SignOut } from "phosphor-react";

import { Dropdown, MenuProps } from 'antd';
import { Link } from "react-router-dom";
import { useState } from "react";

const items: MenuProps['items'] = [
  {
    key: '0',
    label: <Link className="flex items-center gap-2 m-1 mx-1" to="/profile">
              <Gear size={24} color={colors.gray[700]} weight="regular" />
              <div className="text-black font-semibold text-lg ">
                Minha conta
              </div>
            </Link>,
  },
  {
    type: 'divider',
  },
  {
    key: '1',
    label: <Link className="flex items-center gap-2 m-1 mx-1" to="/login">
              <SignOut size={24} color={colors.red[600]} weight="duotone" />
              <div className="text-red-600 font-semibold text-lg ">
                Sair
              </div>
            </Link>,
  },
];

export default function IconProfile(){

  const [iconWeight,setIconWeigth] = useState(false)
  
  return(
    <Dropdown className="flex items-center" menu={{ items }} placement="topRight" trigger={['click']} arrow={{ pointAtCenter: true }} >
      <button className="w-14 h-14 rounded-full" onClick={e => setIconWeigth(!iconWeight)} onBlur={e => setIconWeigth(false)}>
        <UserCircle size={48} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>
      </button>
    </Dropdown>
  );
}