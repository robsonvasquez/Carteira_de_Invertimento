import {NotePencil, Trash, ArrowUp, ArrowDown } from 'phosphor-react';

export interface ElementProps{
  id: number,
  active: string,
  currentPrice: number,
  paidPrice: number,
  variation: number,
}

interface TableProps{
  header: string[];
  list: ElementProps[];
}

import colors from 'tailwindcss/colors';

export default function Table(props : TableProps){
  return(  
    
      <table className='w-full rounded-xl font-semibold'>
        <tr className="flex justify-around ">
          {props.header.map((h : string) => (
            <td className='text-center w-1/5'>{h}</td>
          ))}
        </tr>
        
          {props.list.map((l : ElementProps) => (
            <tr className='bg-white flex border border-zinc-300 rounded-xl p-2 m-2'>
              <td className='text-center w-1/5'>{l.active}</td>
              <td className='text-center w-1/5'>{l.currentPrice}</td>
              <td className='text-center w-1/5'>{l.paidPrice}</td>
              <td className={`flex flex-row justify-center w-1/5 ${l.variation > 0 ? ('text-lime-800') : ('text-red-600')}`}> 
                {l.variation > 0 ? <ArrowUp size={22} /> : <ArrowDown size={22} />} 
                {Math.abs(l.variation)}%
              </td>
              <td className="flex justify-center gap-3 w-1/5">
                <NotePencil size={25} color={colors.lime[800]}/>
                <Trash size={25} color={colors.red[600]}/>
              </td>
            </tr>
          ))}
      </table>
    
  );
}