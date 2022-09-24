import React, { useState } from 'react';
import ProgramData from 'assets/data/program.json';
import { program, programmodal } from 'types/program';
import Card from './Card';
import styles from './program.module.scss';
import Modal from './Modal';

const Program = () => {
  const data: program[] = [...ProgramData];
  const [selectProgram, setSelectProgram] = useState<programmodal>();
  const [open, setOpen] = useState(false);
  const handleModalOpen = (modal: programmodal) => {
    setSelectProgram(modal);
    setOpen(true);
  };

  return (
    <div>
      <ul>
        {data.map((pro) => (
          <Card program={pro} key={pro.title} onClick={() => handleModalOpen(pro.modal)} />
        ))}
      </ul>
      {open && <Modal />}
    </div>
  );
};

export default Program;
