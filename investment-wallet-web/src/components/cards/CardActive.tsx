import PieGraph from "../graphs/PieGraph";

interface CardActive{
  text: string
}

export default function CardActive(props: CardActive){

  const data = [
    {
      id: "css",
      label: "css",
      value: 123,
      color: "hsl(245, 70%, 50%)"
    },
    {
      id: "python",
      label: "python",
      value: 519,
      color: "hsl(2, 70%, 50%)"
    },
    {
      id: "ruby",
      label: "ruby",
      value: 411,
      color: "hsl(341, 70%, 50%)"
    },
    {
      id: "rust",
      label: "rust",
      value: 593,
      color: "hsl(131, 70%, 50%)"
    },
    {
      id: "java",
      label: "java",
      value: 239,
      color: "hsl(68, 70%, 50%)"
    }
  ]

  return (
    <div className="w-5/12 h-96 p-4 flex flex-col bg-white border border-zinc-300 rounded-lg">
      <div className="flex justify-start">
        <h1 className="mb-3 text-2xl">{props.text}</h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <PieGraph data={data}/>
      </div>
    </div>
  );
}