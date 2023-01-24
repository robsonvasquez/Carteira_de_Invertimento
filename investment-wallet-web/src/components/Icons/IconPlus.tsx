import { useState } from "react";
import colors from "tailwindcss/colors";
import { PlusCircle } from "phosphor-react";
import { useNavigate }  from "react-router-dom";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import { formNewWallet } from "../../FormatForms";

interface IconPlusProps{
  size: number;
  className?: string;
}

export default function IconPlus(props: IconPlusProps){

  const [iconWeight, setIconWeigth] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return(
    <>
      <button 
        className={`rounded-full focus:outline-none ${props.className}`}
        onClick={e => (setIconWeigth(!iconWeight), setShowModal(true))}
        onBlur={e => setIconWeigth(false)}
      >
        <PlusCircle size={props.size} color={colors.white} weight={iconWeight ? 'regular' : 'thin' }/>      
      </button>
      
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
          <h1
           className="text-theme-color text-center text-3xl sm:text-4xl font-bold mb-8" 
          >Cadastrar um nova carteira</h1>
          <Form inputs={formNewWallet} button="Cadastrar carteira"/>
        </Modal>
      ) : null}
      
    </>
  );
}