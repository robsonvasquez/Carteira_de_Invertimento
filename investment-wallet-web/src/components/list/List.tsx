import Element, { ElementProps } from './Element'
import Header, { HeaderProps } from './Header';

export interface ListProps{
  header: HeaderProps[];
  list: ElementProps[];
}

export default function List(props : ListProps){

  return(  
    <>
      <div className='flex justify-between'>
        {props.header.map((l : HeaderProps) =>
          <Header key={l.key} value={l.value} price={l.price}/>
        )}
      </div>
      <div className='grid grid-cols-1 divide-y-2 divide-zinc-400'>
        {props.list.map((l : ElementProps) => (
          <Element element={l.element} id={l.id} price={l.price}/>
        ))}
      </div>
    </>
  );
}