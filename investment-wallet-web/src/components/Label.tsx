interface LabelProps{
  label : string;
}
export default function Label(props : LabelProps){
  return(
    <label>{props.label}</label>
  );
}