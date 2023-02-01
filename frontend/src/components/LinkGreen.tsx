import { Link } from "react-router-dom";

interface LinkGreenProps{
  to: string;
  text: string;
  className?: string
}

export default function LinkGreen(props: LinkGreenProps){
  return(
    <Link
      to={props.to}
      className={
        `text-theme-color text-sm font-bold
        decoration-2 hover:underline
        ${props.className}`}
    >
      {props.text}
    </Link>
  )
}