import { programmodal } from '@/types/program';
import { CloseIcon } from '@/assets/svgs';
import styles from './modal.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  pro: programmodal | undefined;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ pro, setOpen }: Props) => {
  if (!pro) return null;

  return (
    <div className={styles.modal}>
      <button type='button' onClick={() => setOpen(false)} className={styles.button}>
        <CloseIcon />
      </button>
      <h3>{pro.subTitle}</h3>
      <h3>프로그램 교육 시간 및 장소</h3>
      <p>{pro.time}</p>
      <p>{pro.place}</p>
      <h3>프로그램 신청 문의</h3>
      <p>{pro.number}</p>
    </div>
  );
};

export default Modal;
