import { useNavigate } from "react-router-dom";
import IconUser from "../Icons/IconUser"

export default function SideBar(props: {open: boolean}){
  
  const navigate = useNavigate();

  return(
    <aside className={`${props.open ? "w-[50%] sm:w-[50%] md:w-[25%]" : "w-0"} transition ease-linear bg-theme-color`}>
      <div className={`${props.open ? "visible" : "invisible"} flex flex-col gap-20 items-center pt-5 px-4`}>
        <IconUser/>
        <div className="w-full gap-y-1 sm:gap-y-4 flex flex-col text-center text-white">
          <div onClick={e => navigate('/wallet')} className="w-full rounded-md py-4 hover:bg-theme-hover-color border-y-2">Carteiras</div>
          <div className="w-full rounded-md py-4 hover:bg-theme-hover-color border-y-2">Minha Conta</div>
          <div className="w-full rounded-md py-4 hover:bg-theme-hover-color border-y-2">Carteiras</div>
          <div className="w-full rounded-md py-4 hover:bg-theme-hover-color border-y-2">Minha Conta</div>
        </div> 
      </div>
    </aside>
  );
}