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
  
  const [selected, setSelected] = useState(props.options[4])
  const [caret, setCaret] = useState(false)
  const [showOptions, setShowOption] = useState(false)

  return(
    <div className='relative h-9 w-32 flex flex-col'>
      <button 
        className='
          w-full h-full flex flex-col items-center
        bg-white border border-gray-300 
        hover:border-gray-400 rounded-lg shadow'
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
                border border-gray-300 rounded-lg'
            >
              {props.options.map((op: optionInterface) => (
                <div 
                  className={`pl-2 rounded hover:bg-sky-100 ${selected.id == op.id ? 'bg-blue-200' : '' }`}
                  onClick={e => (setSelected(op), setShowOption(false))} 
                  key={op.id}
                >
                  {op.option}
                </div>
              ))}
            </div>) : (<></>)
          }
        </div>
      </button>
    </div>
  )
}
