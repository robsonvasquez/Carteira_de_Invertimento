import { HTMLAttributes } from "react";

export default function Title(props: HTMLAttributes<HTMLHeadingElement>){
  
  return(
    <h1
      className={`
      text-theme-color text-center 
      text-2xl sm:text-3xl 
      font-bold
      ${props.className}`}
    >
      {props.children}
    </h1>
  );
}