import { program, programmodal } from 'types/program';
import Image from 'next/image';
import { useState } from 'react';
import styles from './card.module.scss';
import Modal from './Modal';
import cx from 'classnames';

interface Props {
  program: program;
}

const Card = ({ program }: Props) => {
  const [selectProgram, setSelectProgram] = useState<programmodal>();
  const [open, setOpen] = useState(false);

  const handleModalOpen = (modal: programmodal) => {
    setSelectProgram(modal);
    setOpen(true);
  };

  return (
    <li className={cx(styles.list, open && styles.flip)}>
      <div className={styles.textWrap}>
        <h3 className={styles.title}>{program.title}</h3>
        <p className={styles.info}>{program.info}</p>
        <button
          type='button'
          onClick={() => handleModalOpen(program.modal)}
          className={styles.button}
        >
          자세히보기
        </button>
      </div>
      <div className={styles.imgWrap}>
        <Image src={program.img} width={195} height={195} alt={program.title} />
      </div>
      {open && <Modal pro={selectProgram} setOpen={setOpen} />}
    </li>
  );
};

export default Card;
