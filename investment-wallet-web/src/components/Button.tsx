
interface ButtonProps{
  text: string;
  onclick?: () => void;
  className?: string
}

export default function Button(props: ButtonProps){
  return(
    <button className={`h-9 w-40 mt-3 rounded bg-[#1E5128] text-white ${props.className}`} onClick={props.onclick}>
      {props.text}
    </button>
  );
}