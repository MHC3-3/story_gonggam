import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import cx from 'classnames';
import styles from './intro.module.scss';
import { IntroTextBox } from '@/components/Campaign/IntroTextBox';

interface Props {
  setIntro: Dispatch<SetStateAction<boolean>>;
}

const Intro = ({ setIntro }: Props) => {
  const [firstShow, setFirstShow] = useState(false);
  const [firstTextShow, setFirstTextShow] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setFirstTextShow(true);
    }, 1900);

    return () => {
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className={styles.intro}>
      <div className={cx(styles.bgImg, styles.firstBg, !firstShow && styles.fadeOut)}>
        <Image
          priority
          src='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/pageImg/intro.gif'
          alt='intro1'
          width={390}
          height={844}
        />
        {!firstTextShow ? (
          <IntroTextBox color='gray' text='휘-잉' />
        ) : (
          <div onClick={() => setIntro(false)}>
            <IntroTextBox color='brown' who='나' text='토리의 하루...? 한번 해볼까?' />
          </div>
        )}
      </div>
      {/* {firstShow && (
        <div className={styles.bgImg}>
          <Image
            priority
            src='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/pageImg/page2.png'
            alt='intro2'
            width={390}
            height={844}
          />
          <div className={styles.btnWrap}>
            <button onClick={() => setIntro(false)} className={styles.introBtn}>
              토리가 되어 하루 시작하기
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export { Intro };
