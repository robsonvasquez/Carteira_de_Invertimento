import colors from "tailwindcss/colors";
import { List } from "phosphor-react";

interface IconMenuProps{
  className?: string;
  size?: number;
  onclick: () => void;
}

const defaultProps ={
  size: 40,
};

IconMenu.defaultProps = defaultProps;
export default function IconMenu(props : IconMenuProps){
  
  return(
    <button 
      className={`focus:outline outline-white ${props.className}`}
      onClick={e => props.onclick()}
    >
      <List size={props.size} color={colors.white} weight='light'/>
    </button>
  );
}