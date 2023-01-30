import {CaretDown, CaretUp} from 'phosphor-react';
import { useState } from 'react';
import colors from 'tailwindcss/colors'

interface optionInterface{
  key: number
  value: string | number;
  option: string;
}
export interface SelectProps{
  options: optionInterface[];
}
export default function Select(props: SelectProps){
  
  const [selected, setSelected] = useState(props.options[4])
  const [caret, setCaret] = useState(false)
  const [showOptions, setShowOption] = useState(false)

  return(
    <div className='relative h-9 w-32 flex flex-col text-base font-medium text-gray-800'>
      <button 
        className='
          w-full h-full flex flex-col items-center
        bg-white border border-zinc-300 
        hover:border-zinc-400 rounded-lg shadow'
        onClick={e => (setCaret(!caret), setShowOption(!showOptions))}        
        onBlur={e => (setCaret(false), setShowOption(false))}
      >
        <div
          className='
            h-full w-full px-2           
            flex items-center justify-between'
        >
          <span>{selected.option}</span>
          {caret ?
            (<CaretUp className='pointer-events-none' size={20} color={colors.black} />) :
            (<CaretDown className='pointer-events-none' size={20} color={colors.black} />)
          }
        </div>
        <div className='absolute h-full w-full top-9 z-50'>
          {showOptions ? (
            <div 
              className='
                flex flex-col p-1
                text-start bg-white leading-loose 
                border border-zinc-300 rounded-lg'
            >
              {props.options.map((op: optionInterface) => (
                <span 
                  className={`pl-2 rounded hover:bg-sky-50 ${selected.key == op.key ? 'bg-sky-100' : '' }`}
                  onClick={e => (setSelected(op), setShowOption(false))} 
                  key={op.key}
                >
                  {op.option}
                </span>
              ))}
            </div>) : (<></>)
          }
        </div>
      </button>
    </div>
  )
}
