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
    
      <table className='w-full font-medium'>
        <thead>
          <tr className="flex font-semibold px-1">
            {props.header.map((h : string) => (
              <th key={h} className='w-1/5 flex justify-center items-center'>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className='flex flex-col gap-1'>
        {props.list.map((l : ElementProps) => (
          <tr key={l.id} className='bg-white flex border border-gray-300 rounded-lg p-1'>
            <td className='w-1/5 flex justify-center items-center'>{l.active}</td>
            <td className='w-1/5 flex justify-center items-center'>{l.currentPrice}</td>
            <td className='w-1/5 flex justify-center items-center'>{l.paidPrice}</td>
            <td className={`w-1/5 flex justify-start items-center ${l.variation > 0 ? ('text-lime-800') : ('text-red-600')}`}>
              <div className='w-1/2 flex justify-end'>
                {l.variation > 0 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
              </div>
              {Math.abs(l.variation)}%
            </td>
            <td className="flex justify-center gap-8 w-1/5">
              <NotePencil size={25} color={colors.lime[800]}/>
              <Trash size={25} color={colors.red[600]}/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    
  );
}