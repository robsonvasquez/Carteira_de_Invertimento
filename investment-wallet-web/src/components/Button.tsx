import {Plus} from 'phosphor-react';

interface ButtonProps{
  text: string;
  onclick?: () => void;
  className?: string
  plus?: boolean
}

export default function Button(props: ButtonProps){
  return(
    <button
      className={
        `h-9 w-96
        flex justify-center items-center
        rounded text-white shadow
        bg-theme-color hover:bg-houver-button-color
        ${props.className}`} 
      onClick={props.onclick}>
        {props.plus ? <Plus className='mr-2' size={24} color="#ffffff" /> : (<></>)} {props.text}
    </button>
  );
}