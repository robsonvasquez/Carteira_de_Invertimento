export interface ElementProps{
  id: number
  element: string
  price?: number
}

export default function Element(props: ElementProps){
  return(
    <div className="px-3 flex justify-between">
      <h2>{props.element}</h2>
      <h2>{props.id}</h2>
      <h2>{props.price}</h2>
    </div>
  );
}