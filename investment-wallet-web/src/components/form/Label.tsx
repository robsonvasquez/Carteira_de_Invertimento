interface LabelProps{
  label : string;
}
export default function Label(props : LabelProps){
  return(
    <label className="text-black">{props.label}</label>
  );
}