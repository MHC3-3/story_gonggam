import { NextBtnIcon } from '@/assets/svgs';
import { template } from '@/types/campaign';
import { useRecoilState, useRecoilValue } from 'recoil';
import { storyArrayAtom, storyCurAtom, storyResultAtom } from 'recoil/atom';
import styles from './textBox.module.scss';
import cx from 'classnames';
import { useRouter } from 'next/router';
import Typical from 'react-typical';
import { resultCountUp } from 'apis/template';

const TextBox = () => {
  const router = useRouter();
  const story = useRecoilValue<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);
  const result = useRecoilValue(storyResultAtom);

  const { color, who, text, isLast } = story[current];

  const nextPage = () => {
    setCurrent(current + 1);
    if (isLast) {
      router.push(`/${result}`);
      resultCountUp({
        code: result,
        env: process.env.NEXT_PUBLIC_COUNTUP,
      });
    }
  };

  return (
    <div className={cx(color && styles[color], styles.textBox)}>
      {who && <div className={styles.who}>{who}</div>}
      <div className={styles.text} onClick={nextPage}>
        {color === 'gray' ? text && <Typical steps={[text, 3000]} /> : text}
        <NextBtnIcon className={styles.nextBtn} />
      </div>
    </div>
  );
};

export { TextBox };
