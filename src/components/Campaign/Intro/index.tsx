import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import cx from 'classnames';
import styles from './intro.module.scss';

interface Props {
  setIntro: Dispatch<SetStateAction<boolean>>;
}

const Intro = ({ setIntro }: Props) => {
  const [firstShow, setFirstShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstShow(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.intro}>
      <div className={cx(styles.bgImg, styles.firstBg, !firstShow && styles.fadeOut)}>
        <p>
          오류동 버들마을에는 &apos;토리&apos;라는 <br />
          깜찍한 주민이 살고 있답니다.
        </p>
        <Image
          priority
          src='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/pageImg/page1.png'
          alt='page1'
          width={390}
          height={844}
        />
      </div>
      {firstShow && (
        <div className={styles.bgImg}>
          <Image
            priority
            src='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/pageImg/page2.png'
            alt='page2'
            width={390}
            height={844}
          />
          <div className={styles.btnWrap}>
            <p>오늘 하루 &apos;토리&apos;가 되어 버들마을의 사랑방을 구경해보세요</p>
            <button onClick={() => setIntro(false)} className={styles.introBtn}>
              하루동안 &apos;토리&apos;가 되어 살아보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Intro };
