import {ButtonHTMLAttributes} from 'react';
import {Plus} from 'phosphor-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
  image?: 'plus'
}

export default function Button(props: ButtonProps){
  return(
    <button
      {...props}
      className={
        `h-10 w-96
        flex justify-center items-center
        rounded text-white shadow
        bg-theme-color hover:bg-houver-button-color
        ${props.className}`
      } 
      >
        {props.image == 'plus' ? <Plus className='mr-2' size={24} color="#ffffff" /> : (<></>)}
        {props.text}
    </button>
  );
}