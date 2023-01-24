import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export default function Title(props: TitleProps){
  
  return(
    <h1
      className={`
      mb-5
      text-theme-color text-center 
      text-2xl sm:text-3xl 
      font-semibold
      ${props.className}`}
    >
      {props.children}
    </h1>
  );
}