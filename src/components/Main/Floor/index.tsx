import { ArrowBottomIcon, ArrowTopIcon } from 'assets/svgs';
import { ReactNode, useState } from 'react';
import styles from './subTitle.module.scss';

interface Props {
  floor: string;
  title: string;
  subTitle: string;
  children: ReactNode;
}

const Floor = ({ floor, title, subTitle, children }: Props) => {
  const [open, setOpen] = useState(true);

  const onClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.subTitle}>
        <div className={styles.floor}>
          {floor}
          <button className={styles.arrow} type='button' onClick={onClick}>
            {open ? <ArrowBottomIcon /> : <ArrowTopIcon />}
          </button>
        </div>
        {open && (
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subTitle}>{subTitle}</p>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Floor;
