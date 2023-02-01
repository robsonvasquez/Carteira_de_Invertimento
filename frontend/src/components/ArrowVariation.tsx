import {ArrowDown, ArrowUp} from 'phosphor-react';

interface ArrowVariationProps{
  arrow: boolean;
  children: number;
  className?: string;
  classNameChildrens?: string;
}

const defaultProps = {
  arrow: true,
}

ArrowVariation.defaultProps = defaultProps
export default function ArrowVariation(props: ArrowVariationProps){
  return(
    <div 
      className={`
        flex
        ${props.children > 0 ? 'text-lime-800': 'text-red-600'}
        ${props.className}`}
    >
      <div className={`${props.classNameChildrens} flex justify-end items-center`}>
        {props.arrow ? (props.children > 0 ? <ArrowUp size={20} weight='bold'/> : <ArrowDown size={20} weight='bold'/>) : null}
      </div>
      <div className={`${props.classNameChildrens} flex justify-start items-center`}>
        {Math.abs(props.children)}%
      </div>  
    </div>
    
  );
}