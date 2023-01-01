import Select from "./Select";

const list = [
  {
    value: '1',
    key:'1 dia',
  },
  {
    value: '7',
    key:'7 dias',
  },
  {
    value: '14',
    key:'2 semanas',
  },
  {
    value: '30',
    key:'1 mês',
  },
  {
    value: '90',
    key:'3 meses',
  },
  {
    value: '180',
    key:'6 meses',
  },
  {
    value: '356',
    key:'1 ano',
  },
] 

export default function CardGraph(){
  return(
    <div className="w-10/12 my-5 p-4 flex justify-between bg-white border border-gray-300 rounded-lg">
      <h1 className="mb-3 text-2xl">Carteira</h1>
      <Select
        text="text select"
        options={list}
      />
    </div>
  );
}