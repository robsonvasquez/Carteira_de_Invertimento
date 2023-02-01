import { MouseEvent, useState, useRef } from "react";
import BottomBar from "../bars/BottomBar";
import Sidebar from "../bars/SideBar";
import TopBar from "../bars/TopBar";

export default function Layout(props: {children: JSX.Element}){

  const refInside = useRef<HTMLDivElement>(null);
  
  const[open, setOpen] = useState(false);
  
  const handleInsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (refInside.current == event.target) setOpen(false)
  }

  return(
    <div className="w-full h-full flex">
      <Sidebar open={open}/>
      <div 
        ref={refInside}
        className="
          w-full
          bg-transparent"
        onClick={handleInsideClick}
      >
        <div
          className={`w-full h-full flex flex-col justify-between
            ${open ? 'pointer-events-none': ''}
            scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400`}
        >                
          <div><TopBar open={open} onOpen={() => setOpen(true)}/></div>
          <div>{props.children}</div>
          <div><BottomBar/></div>
        </div>
      </div>   
    </div>
  );
}