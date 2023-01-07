import {CaretDown, CaretUp} from 'phosphor-react';
import { useState } from 'react';
import colors, { slate } from 'tailwindcss/colors'

interface optionInterface{
  id: number
  value: string | number;
  option: string;
}
interface SelectProps{
  options: optionInterface[];
}
export default function Select(props: SelectProps){
  
  const [selected, setSelected] = useState(props.options[4].option)
  const [caret, setCaret] = useState(false)
  const [showOptions, setShowOption] = useState(false)

  console.log(selected);
  return(
    <div className='relative h-9 w-32 flex flex-col justify-end items-center'>
      <button 
        className='
          flex flex-col items-center
          w-full h-full bg-white border border-gray-300 
        hover:border-gray-500 rounded-lg shadow '
        onClick={e => (setCaret(!caret), setShowOption(!showOptions))}        
        onBlur={e => (setCaret(false), setShowOption(false))}
      >
        <div className='h-full w-full px-2 gap-2 flex items-center justify-between'>
          <span>{selected}</span>
          {caret ?
            (<CaretUp className='pointer-events-none' size={20} color={colors.black} />) :
            (<CaretDown className='pointer-events-none' size={20} color={colors.black} />)
          }
        </div>
        <div className='absolute h-full w-full top-10 z-50'>
          {showOptions ? 
            (<div className='flex flex-col border text-justify border-zinc-300 bg-white rounded-lg p-1'>
              {props.options.map((op: optionInterface) => (
                <div className='pl-2 rounded hover:bg-green-200' onClick={e => (setSelected(op.option), setShowOption(false))} key={op.id}>{op.option}</div>
              ))}
            </div>) : 
            (<></>)
          }
        </div>

      </button>
      
    </div>
  )
}

{/* {props.options.map((op: optionInterface) => (
          <option key={op.id} value={op.value}>{op.option}</option>
        ))} */}