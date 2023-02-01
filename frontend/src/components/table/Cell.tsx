import { useState } from "react";
import ArrowVariation from "../ArrowVariation";
import CardActive from "../cards/CardActive";
import TitleCard from "../cards/TitleCard";
import Graph from "../graphs/Graph";
import Modal from "../modal/Modal";
import {ActiveInterface} from "./Table";

interface CellProps{
  active: ActiveInterface;
}

export default function Cell(props: CellProps){

  const [showModal, setShowModal] = useState(false);

  return(
    <>
      <td className='w-1/5 flex justify-center items-center'>
        <button className="hover:text-theme-light-color hover:underline decoration-2" onClick={() => setShowModal(true)}>
          {props.active.active}
        </button>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <CardActive active={props.active}/>
        </Modal>
      </td>

      
    </>
  );
}