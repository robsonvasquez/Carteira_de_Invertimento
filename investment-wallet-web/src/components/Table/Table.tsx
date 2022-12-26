export interface ElementProps{
  id: number
  element: string
  price?: number
}

interface TableProps{
  header: string[];
  list: ElementProps[];
}


export default function Table(props : TableProps){
  return(
    <div className="table w-full border-collapse rounded-lg">
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
            <div className="table-cell text-center">{l.id}</div>
            <div className="table-cell text-center">{l.element}</div>
            <div className="table-cell text-center">{l.price}</div>
          </div>  
        ))}  
      </div>
    </div>
  );
}