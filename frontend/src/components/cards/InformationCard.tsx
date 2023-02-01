interface InformationCardProps{
  label?: string;
  text?: string;
  children?: JSX.Element;
}

export default function InformationCard(props: InformationCardProps){
  return(
    <div className="flex items-center">
      <span className="text-base text-gray-600">{props.label}</span>
        &nbsp;          
      {props.text ? (<span className="text-lg font-semibold text-gray-800">{props.text}</span>): null}
      {props.children ? (props.children) : null}
    </div>
  );
}