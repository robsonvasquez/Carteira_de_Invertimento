import { useState } from "react";
import Graph from "../graphs/Graph";
import Modal from "../modal/Modal";
import {ActiveInterface} from "./Table";

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

const list  = [
  {
    key: 0,
    value: '1',
    option:'1 dia',
  },
  {
    key: 1,
    value: '3',
    option:'3 dias',
  },
  {
    key: 2,
    value: '7',
    option:'1 semana',
  },
  {
    key: 3,
    value: '14',
    option:'2 semanas',
  },
  {
    key: 4,
    value: '30',
    option:'1 mês',
  },
  {
    key: 5,
    value: '90',
    option:'3 meses',
  },
  {
    key: 6,
    value: '180',
    option:'6 meses',
  },
  {
    key: 7,
    value: '356',
    option:'1 ano',
  },
]

interface CellProps{
  active: ActiveInterface;
}

export default function Cell(props: CellProps){

  const [showModal, setShowModal] = useState(false);

  return(
    <>
      <td className='w-1/5 flex justify-center items-center hover:text-zinc-500'>
        <button onClick={() => setShowModal(true)}>
          {props.active.active}
        </button>
      </td>

      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <div 
          className="
            flex flex-col gap-y-4
            divide-y divide-zinc-300
            w-[400px] sm:w-[540px] md:w-[668px] lg-[924px]"
        >
          <div className="flex flex-col pl-5 gap-5 justify-between text-2xl font-semibold">
            <h1>{props.active.active}</h1>
            <div className="flex justify-start gap-10 text-base font-medium">
              <h2><span className="text-gray-600">Preço de Compra: </span> R$ {props.active.paidPrice}</h2>
              <h2><span className="text-gray-600">Preço de Atual: </span> R$ {props.active.currentPrice}</h2>
              <h2 className={`${props.active.variation > 0 ? ('text-lime-800') : ('text-red-600')}`}><span className="text-gray-600">Variação: </span> {props.active.variation}</h2>
            </div>
          </div>
          <div className="flex pt-4 w-full h-96">
            <Graph data={data} options={list}/>
          </div>
        </div>
      </Modal>
    </>
  );
}