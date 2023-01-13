import {ButtonHTMLAttributes} from 'react';
import colors from 'tailwindcss/colors';
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
        `h-8 w-80 sm:h-10 sm:w-96
        flex justify-center items-center
        rounded-lg text-white shadow
        bg-theme-color hover:bg-houver-button-color
        ${props.className}`
      } 
      >
        {props.image == 'plus' ? <Plus className='mr-2' size={24} color={colors.white} /> : (<></>)}
        {props.text}
    </button>
  );
}