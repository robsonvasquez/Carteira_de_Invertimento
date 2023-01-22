import { useNavigate } from "react-router-dom";
import IconUser from "../Icons/IconUser"

export default function SideBar(props:{open?: boolean}){
    const navigate = useNavigate();

    return(
        // <aside className={`${props.open ? "col-span-1" : "hidden"} row-span-3 felx justify-center bg-red-400`}>
        //     <div className={`${!open ? "hidden" : "w-full"} flex flex-col items-center p-4`}>
        //         <div>Carteiras</div>
        //         <div>Minha Conta</div>
        //         <div>Carteiras</div>
        //         <div>Minha Conta</div>
        //     </div>
        // </aside>

    <aside className={`${props.open ? "w-[50%] sm:w-[50%] md:w-[25%]" : "w-0"} duration-300 bg-[#1e5128fa] py-5`}>
        <div className={`${props.open ? "visible" : "invisible"} flex flex-col gap-4 items-center p-4`}>
            <IconUser/>
            <div className="w-full gap-y-1 sm:gap-y-4 flex flex-col text-center text-white">
                <div onClick={e => navigate('/login')} className="w-full rounded-md py-4 hover:bg-[#1d3b23fa] border-y-2">Carteiras</div>
                <div className="w-full rounded-md py-4 hover:bg-[#1d3b23fa] border-y-2">Minha Conta</div>
                <div className="w-full rounded-md py-4 hover:bg-[#1d3b23fa] border-y-2">Carteiras</div>
                <div className="w-full rounded-md py-4 hover:bg-[#1d3b23fa] border-y-2">Minha Conta</div>
            </div> 
        </div>
    </aside>
    );
}