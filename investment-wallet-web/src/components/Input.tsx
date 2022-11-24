
interface InputProps {
  placeholder: string;
}

export default function Input(props : InputProps){
  return(
    <input className="m-2 p-1 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:border-blue-500 " type="text" placeholder={ props.placeholder }></input>
  );
}