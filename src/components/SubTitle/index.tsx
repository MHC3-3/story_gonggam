import Image from 'next/image';
import React from 'react';
import styles from './subTitle.module.scss';

interface Props {
  floor: string;
  title: string;
  subTitle: string;
  onClick: () => void;
}

function SubTitle({ floor, title, subTitle, onClick }: Props) {
  return (
    <div className={styles.subTitle}>
      <div className={styles.floor}>
        {floor}
        <button className={styles.arrow} type='button' onClick={onClick}>
          <Image src='/pngs/arrow_down.png' alt='arrow_down' width={25} height={25} />
        </button>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  );
}

export default SubTitle;
