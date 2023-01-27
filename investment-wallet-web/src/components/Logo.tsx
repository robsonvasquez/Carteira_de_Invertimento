import colors from "tailwindcss/colors";
import { IconWeight, Wallet } from "phosphor-react";

interface LogoProps{
  sizeLogo?: number;
  weightLogo?: IconWeight
  className?: string;
  classNameText?: string;
}

const defaultProps ={
  sizeLogo: 40,
  weightLogo: 'fill',
};

Logo.defaultProps = defaultProps;

export default function Logo(props: LogoProps){
  return(
    <div className={`flex justify-start items-center gap-1 ${props.className}`}>
      <Wallet color={colors.white} size={props.sizeLogo} weight={props.weightLogo}/>
      <h1 className={`text-white text-3xl font-bold ${props.classNameText}`}>Wallet</h1>
    </div>
  );
}