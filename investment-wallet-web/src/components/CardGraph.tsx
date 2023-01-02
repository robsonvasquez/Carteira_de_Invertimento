import Graph from "./Graphs/Graph";
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

  const data = [
    {
      "id": "us",
      "color": "hsl(191, 70%, 50%)",
      "data": [
        {
          "x": "Jan",
          "y": 12
        },
        {
          "x": "Fev",
          "y": 190
        },
        {
          "x": "Mar",
          "y": 123
        },
        {
          "x": "Abr",
          "y": 152
        },
        {
          "x": "Mai",
          "y": 154
        },
        {
          "x": "Jun",
          "y": 43
        },
        {
          "x": "Jul",
          "y": 23
        },
        {
          "x": "Ago",
          "y": 130
        },
        {
          "x": "Set",
          "y": 65
        },
        {
          "x": "Out",
          "y": 121
        },
        {
          "x": "Nov",
          "y": 18
        },
        {
          "x": "Dez",
          "y": 52
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(291, 70%, 50%)",
      "data": [
        {
          "x": "Jan",
          "y": 112
        },
        {
          "x": "Fev",
          "y": 98
        },
        {
          "x": "Mar",
          "y": 173
        },
        {
          "x": "Abr",
          "y": 167
        },
        {
          "x": "Mai",
          "y": 254
        },
        {
          "x": "Jun",
          "y": 229
        },
        {
          "x": "Jul",
          "y": 89
        },
        {
          "x": "Ago",
          "y": 170
        },
        {
          "x": "Set",
          "y": 247
        },
        {
          "x": "Out",
          "y": 141
        },
        {
          "x": "Nov",
          "y": 138
        },
        {
          "x": "Dez",
          "y": 161
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(261, 70%, 50%)",
      "data": [
        {
          "x": "Jan",
          "y": 112
        },
        {
          "x": "Fev",
          "y": 124
        },
        {
          "x": "Mar",
          "y": 173
        },
        {
          "x": "Abr",
          "y": 167
        },
        {
          "x": "Mai",
          "y": 254
        },
        {
          "x": "Jun",
          "y": 229
        },
        {
          "x": "Jul",
          "y": 89
        },
        {
          "x": "Ago",
          "y": 170
        },
        {
          "x": "Set",
          "y": 247
        },
        {
          "x": "Out",
          "y": 141
        },
        {
          "x": "Nov",
          "y": 138
        },
        {
          "x": "Dez",
          "y": 161
        }
      ]
    }
  ]

  return(
    <div className="w-10/12 my-5 p-4 flex flex-col bg-white border border-gray-300 rounded-lg">
      <div className="mb-5 flex justify-between">
        <h1 className="mb-3 text-2xl">Carteira</h1>
        <Select
          text="text select"
          options={list}
        />
      </div>
      <div className="flex w-full h-96">
        <Graph data={data}/>
      </div>
    </div>
  );
}