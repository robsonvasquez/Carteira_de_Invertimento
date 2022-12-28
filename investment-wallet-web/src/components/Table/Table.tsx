import {NotePencil, TrashSimple} from 'phosphor-react';

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


export default function Table(props : TableProps){
  return(

    <div className="table w-full border-collapse">
      <div className="table-header-group">
        <div className="table-row bg-transparent">
          {props.header.map((h : string) => (
            <div className="table-cell text-center" >
              {h} 
            </div>
          ))}
        </div>
      </div>
      <div className="table-row-group divide-y divide-zinc-200">
        {props.list.map((l : ElementProps) => (
          <div className="table-row bg-white">
            <div className="table-cell text-center align-middle">{l.active}</div>
            <div className="table-cell text-center align-middle">{l.currentPrice}</div>
            <div className="table-cell text-center align-middle">{l.paidPrice}</div>
            <div className="table-cell text-center align-middle">{l.variation}</div>
            <div className="table-cell">
              <div className="flex justify-center items-center">
                <NotePencil size={24} color="#31A900" width='regular'/>
                <TrashSimple size={24} color="#FF0000" width='regular' />
              </div>
            </div>
          </div>  
        ))}  
      </div>
    </div>
  );
}