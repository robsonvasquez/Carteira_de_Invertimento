import { Link } from "react-router-dom";

import Table from "../components/table/Table";
import TopBar from "../components/bars/TopBar";
import BottomBar from "../components/bars/BottomBar";
import CardResume from "../components/cards/CardResume";
import CardGraph from "../components/cards/CardGraph";
import CardActive from "../components/cards/CardActive";
import Button from "../components/form/Button";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import Title from "../components/Title";
import Form from "../components/form/Form";
import { formNewActive } from "../FormatForms";
import Layout from "../components/layout/Layout";

const l = [
  {
    id: 1,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: -2,
  },    
  {
    id: 2,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: 2,
  },
  {
    id: 3,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: -24,
  },
  {
    id: 4,
    active: 'Poupança',
    currentPrice: 10,
    paidPrice: 20,
    variation: 7,
  }
]

const header = ['Ativo', 'Preço pago', 'Preço Atual', 'Variação', 'Opções']

export default function Wallet(){

  const [showModal, setShowModal] = useState(false)

  return(
    <>
      <Layout>
        <div className="w-full h-full flex flex-col items-center gap-5 py-5">
          <CardResume balance={25} appliedValue={500} title={"Resume da Carteira"} profitability={100}/>
          <CardGraph title="Histórico da Carteira"/>
          <div className="flex w-3/4 justify-between items-center">
            <CardActive text="Ações por empresa"/>
            <CardActive text="Tipos de Ações"/>
          </div>
          <div className="w-9/12 gap-5 flex flex-col items-end">
            <Button
              className='w-52'
              onClick={() => setShowModal(true)}
              image='plus'  
              text='Adicionar ativo'
            />
            <Table header={header} list={l}/>
          </div>
        </div>
      </Layout>
     
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
            <Title>CADASTRAR ATIVO</Title>
            <Form inputs={formNewActive} button="Cadastrar ativo"/>
        </Modal>
      ): null}
    </>
  );
}
