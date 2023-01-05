import {CaretDown, CaretUp} from 'phosphor-react';
import { useState } from 'react';
import colors from 'tailwindcss/colors'

interface optionInterface{
  id: number
  value: string | number;
  option: string;
}
interface SelectProps{
  text: string;
  options: optionInterface[];
}
export default function Select(props: SelectProps){
  const [caret, setCaret]  = useState(false)

  return(
    <div className='relative h-6 flex justify-end items-center'>
      <select 
        className='
          pl-2 pr-8 appearance-none bg-white border border-gray-300 
        hover:border-gray-500 rounded-lg shadow focus:outline-none'
        onPointerDown={e => setCaret(!caret)}
        onPointerUp={e => setCaret(false)}
        onPointerOut={e => setCaret(false)}
      >
        {props.options.map((op: optionInterface) => (
          <option key={op.id} value={op.value}>{op.option}</option>
        ))}
      </select>
      {caret ?
        (<CaretUp className='absolute mr-2 pointer-events-none' size={20} color={colors.black} />) :
        (<CaretDown className='absolute mr-2 pointer-events-none' size={20} color={colors.black} />)
      }
    </div>
  )
}