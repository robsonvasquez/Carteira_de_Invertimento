
interface ButtonProps{
  text: string;
  onclick?: () => void;
  className?: string
}

export default function Button(props: ButtonProps){
  return(
    <button
      className={
        `h-9 w-96
        rounded text-white
        bg-green-800 hover:bg-green-900 
        ${props.className}`} 
      onClick={props.onclick}>
        {props.text}
    </button>
  );
}