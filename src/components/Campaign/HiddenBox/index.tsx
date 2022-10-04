import { CloseIcon } from '@/assets/svgs';
import Image from 'next/image';
import { useState } from 'react';
import styles from './hiddenBox.module.scss';

const HiddenBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.hidden}>
      <button onClick={() => setOpen(true)} className={styles.hiddenBtn}></button>

      {open && (
        <>
          <button onClick={() => setOpen(false)} className={styles.closeBtn}>
            <CloseIcon />
          </button>
          <Image src={'/pngs/hidden.png'} alt='hidden-message' layout='fill' />
        </>
      )}
    </div>
  );
};

export { HiddenBox };
