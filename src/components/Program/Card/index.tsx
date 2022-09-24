import { program, programmodal } from 'types/program';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import styles from './card.module.scss';

interface Props {
  program: program;
  onClick?: MouseEventHandler;
}

const Card = ({ program, onClick }: Props) => {
  return (
    <li className={styles.list}>
      <div className={styles.textWrap}>
        <h3 className={styles.title}>{program.title}</h3>
        <p className={styles.info}>{program.info}</p>
        <button type='button' onClick={onClick} className={styles.button}>
          자세히보기
        </button>
      </div>
      <div className={styles.imgWrap}>
        <Image src={program.img} width={195} height={195} />
      </div>
    </li>
  );
};

export default Card;
