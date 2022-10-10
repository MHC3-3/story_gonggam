import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import cx from 'classnames';
import styles from './intro.module.scss';
import { IntroTextBox } from '@/components/Campaign/IntroTextBox';

interface Props {
  setIntro: Dispatch<SetStateAction<boolean>>;
}

const Intro = ({ setIntro }: Props) => {
  const [firstTextShow, setFirstTextShow] = useState(false);
  const [secondTextShow, setSecondTextShow] = useState(true);
  const [firstShow, setFirstShow] = useState(true);
  const [secondShow, setSecondShow] = useState(false);
  const [thirdShow, setThirdShow] = useState(false);

  const textTimer = setTimeout(() => {
    setFirstTextShow(true);
  }, 3000);

  const textTimer2 = setTimeout(() => {
    setSecondTextShow(false);
  }, 5000);

  return (
    <div className={styles.intro}>
      <div className={cx(styles.bgImg)}>
        <Image
          priority
          src='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/pageImg/page1.png'
          alt='intro1'
          width={390}
          height={844}
        />
        <div
          onClick={() => {
            setSecondShow(true);
            setFirstShow(false);
            textTimer;
            textTimer2;
          }}
        >
          <IntroTextBox color='gray' text='심심한데 뭐 재밌는 거 없나?' />
        </div>
      </div>
      {secondShow && (
        <div className={cx(styles.bgImg, secondShow && styles.fadeOut)}>
          <Image
            priority
            src='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/pageImg/intro.gif'
            alt='intro1'
            width={390}
            height={844}
          />
          {!firstTextShow && <IntroTextBox color='gray' text='휘-잉' />}
          {!secondTextShow && (
            <div
              onClick={() => {
                setThirdShow(true);
                setSecondShow(false);
                clearTimeout(textTimer);
                clearTimeout(textTimer2);
              }}
            >
              <IntroTextBox color='brown' who='나' text='토리의 하루...? 한번 해볼까?' />
            </div>
          )}
        </div>
      )}
      {thirdShow && (
        <div className={cx(styles.bgImg, thirdShow && styles.fadeOut)}>
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
      )}
    </div>
  );
};

export { Intro };
