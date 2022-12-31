interface optionInterface{
  value: string | number;
  key: string;
}
interface SelectProps{
  text: string;
  options: optionInterface[];
}
export default function Select(props: SelectProps){
  return(
    <select>
      {props.options.map((op: optionInterface) => (
        <option value={op.value}>{op.key}</option>
      ))}
    </select>
  )
}