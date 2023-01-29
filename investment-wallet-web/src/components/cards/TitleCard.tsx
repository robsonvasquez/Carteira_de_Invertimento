import { HTMLAttributes } from "react";

export default function TitleCard(props: HTMLAttributes<HTMLHeadingElement>){  
  return(
    <h1 
      className={`
        text-2xl font-black text-gray-800
        ${props.className}`}
    >
      {props.children}
    </h1>
  );
}