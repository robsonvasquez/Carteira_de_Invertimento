
interface ButtonProps {
  text: string;
}

export default function Button(props: ButtonProps){
  return(
    <button className="m-2 p-1 rounded bg-blue-500 text-white">{props.text}</button>
  );
}