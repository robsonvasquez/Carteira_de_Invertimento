import {CaretDown} from 'phosphor-react';
import colors from 'tailwindcss/colors'

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
    <div className='relative h-6 flex justify-end items-center'>
      <select className="pl-2 pr-7 appearance-none bg-white border border-gray-300 hover:border-gray-500 rounded-lg shadow focus:outline-none">
        {props.options.map((op: optionInterface) => (
          <option className="" value={op.value}>{op.key}</option>
        ))}
      </select>
      <CaretDown className='absolute mr-2' size={20} color={colors.black} />
    </div>
  )
}