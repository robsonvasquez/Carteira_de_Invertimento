import { MouseEvent, useRef } from "react";

interface ModalProps{
  children: JSX.Element[];
  onClose: () => void;
}
export default function Modal(props: ModalProps){
  
  const refBackgraound = useRef<HTMLDivElement>(null);
  
  const handleOutSideClick  = (event : MouseEvent<HTMLDivElement>) => {
    if (refBackgraound.current == event.target) props.onClose()
  }

  return(
    <div 
      ref={refBackgraound}
      className="
        fixed w-screen h-screen z-40
        flex items-center justify-center
        top-0 left-0 cursor-pointer
        bg-black bg-opacity-40"
      onClick={handleOutSideClick}
    >  
      <div 
        className="
        relative w-[30%] min-w-min
        flex flex-col gap-2
        justify-center items-center
        p-5 bg-white rounded-lg
        cursor-auto border border-zinc-300"
      >
        {props.children}
      </div>
    </div>

  );
}