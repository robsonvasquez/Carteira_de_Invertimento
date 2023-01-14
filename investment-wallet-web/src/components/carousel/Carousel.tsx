import colors from "tailwindcss/colors";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useEffect, useState, useRef, MouseEventHandler } from "react";

interface elementInterface{
  key: number,
  element: JSX.Element,
}

interface CarouselProps{
  size: number;
  elements: elementInterface[];
  width: number;
  gap: number;
}

export default function Carousel(props: CarouselProps){

  const [i, setI] = useState(0);
  const [j, setJ] = useState(i+props.size);
  const [animation, setAnimation] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  // const [width, setWidth] = useState(props.widthElements)
  // const [gap, setGap] = useState(props.gap.toString())
  // const [position, setPosition] = useState(props.widthElements)
  const refCarousel = useRef<HTMLDivElement>(null)
  const refItem = useRef<HTMLDivElement>(null)
  

  // useEffect(() => {
    // animation ? (direction ? right(i, j) : left(i, j)) : (false)
    
  // },[(animation && direction)])

  // console.log(i, j)
  // // console.log(`translate-x-[${props.widthElements}px]`)

  function left(i: number, j: number) {
    setI(i-1 < 0 ? i : i-1)
    setJ(j-1 < props.size ? j : j-1)
  }

  function right(i: number, j: number) {
    setI(i+1 > props.size-1 ? i : i+1)
    setJ(j+1 > props.elements.length-1 ? j : j+1)
  }

  function handleLeft(){
    if(refCarousel.current){      
      refCarousel.current.scrollLeft -= 400//(refCarousel.current.offsetWidth/props.elements.length)
      console.log(refCarousel.current.offsetWidth/props.elements.length)
    }    
  }
  function handleRigth(){
    if(refCarousel.current){
      refCarousel.current.scrollLeft += 400//(refCarousel.current.offsetWidth/400)
      console.log(refCarousel.current.offsetWidth)
    }
  }

  console.log(i, j, animation, direction)

  // useEffect (()=>{
  //   if(animation){
  //     if(direction == 'right'){
  //       right(i, j) 
  //     }else{
  //       if(direction != 'left'){
  //         left(i, j)
  //       }
  //     } 
  //   }
    
  //   setTimeout(()=>{
  //     setAnimation(false)
  //   }, 1050)
    
  // },[animation])

  const x = 400;
  return(  
    <div className="max-w-max flex items-center gap-5 justify-center">
      <CaretLeft 
        className="rounded-full bg-gray-200"
        // onClick={e => (setAnimation(true), setDirection('left'))}
        onClick={e => handleLeft()}
        size={60}
        color={colors.gray[400]} 
        weight='bold'
      />
      <div 
        className={`w-[1200px] overflow-x-hidden flex gap-4 px-2 scroll-smooth`}
        ref={refCarousel}
      >
        {props.elements.map((element: elementInterface) => (
          <div 
            key={element.key}
            ref={refItem}
            className='flex'
            // className={`${animation ? (`transition transform ${direction == 'right' ? (`-translate-x-[400px]`) : (`translate-x-[400px]`)} duration-1000 ease-linear`) : ('')}`}
          >
            {element.element}
          </div>
        ))}
      </div>
      <CaretRight
        className="rounded-full bg-gray-200"
        // onClick={e => (setAnimation(true), setDirection('right'))}
        onClick={e => handleRigth()}
        size={60}
        color={colors.gray[400]}
        weight='bold'
      />
    </div>
  );  
}
