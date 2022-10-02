import { useRecoilState, useRecoilValue } from 'recoil';
import { storyArrayAtom, storyCurAtom } from 'recoil/atom';
import styles from './background.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';

const Background = () => {
  const story = useRecoilValue(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);

  useEffect(() => {
    if (story[current].temp === 'loading') {
      const timer = setTimeout(() => {
        setCurrent(current + 1);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [current, setCurrent, story]);

  const nextPage = () => {
    setCurrent(current + 1);
  };
  return (
    <div>
      {story[current]?.backgroundImg && (
        <div className={styles.bgImg}>
          <Image
            src={story[current]?.backgroundImg}
            alt={`background` + current}
            width={390}
            height={844}
          />
        </div>
      )}
      {story[current + 1]?.backgroundImg && (
        <div className={styles.displayNone}>
          <Image
            priority
            src={story[current + 1]?.backgroundImg}
            alt={`background` + current + 1}
            width={390}
            height={844}
          />
        </div>
      )}
    </div>
  );
};

export default Background;
