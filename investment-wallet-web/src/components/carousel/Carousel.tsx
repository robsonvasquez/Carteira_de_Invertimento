import colors from "tailwindcss/colors";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useState } from "react";

interface elementInterface{
  key: number,
  element: JSX.Element,
}

interface CarouselProps{
  size: number;
  elements: elementInterface[];
}

export default function Carousel(props: CarouselProps){

  const [i, setI] = useState(0);
  const [j, setJ] = useState(i+props.size);

  function onSliceData(i: number, j: number){
    return props.elements.slice(i,j)
  }

  function left(i: number, j: number) {
    setI(i-1 < 0 ? i : i-1)
    setJ(j-1 < props.size ? j : j-1)
  }

  
  function right(i: number, j: number) {
    setI(i+1 > props.size+1 ? i : i+1)
    setJ(j+1 > props.elements.length ? j : j+1)
  }

  return(
    
    <div className="max-w-max relative flex items-center gap-5 justify-center  ">
      <CaretLeft 
        className="rounded-full bg-gray-200"
        onClick={e => left(i, j)}
        size={60}
        color={colors.gray[400]} 
        weight='bold'
      />
      <div className="overflow-x-hidden flex gap-5">
        {onSliceData(i, j).map((element: elementInterface) => (
          <div key={element.key}>
            {element.element}
          </div>
            
        ))}
      </div>
      <CaretRight
        className="rounded-full bg-gray-200"
        onClick={e => right(i, j)}
        size={60}
        color={colors.gray[400]}
        weight='bold'
      />
    </div>
  );  
}
