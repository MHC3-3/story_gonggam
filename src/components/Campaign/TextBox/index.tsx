import { NextBtnIcon } from '@/assets/svgs';
import { template } from '@/types/campaign';
import { useRecoilState, useRecoilValue } from 'recoil';
import { storyArrayAtom, storyCurAtom, storyResultAtom } from 'recoil/atom';
import styles from './textBox.module.scss';
import cx from 'classnames';
import { useRouter } from 'next/router';

const TextBox = () => {
  const router = useRouter();
  const story = useRecoilValue<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);
  const result = useRecoilValue(storyResultAtom);

  const { color, who, text, isLast } = story[current];

  const nextPage = () => {
    setCurrent(current + 1);
    isLast && router.push(`/${result}`);
  };

  return (
    <div className={cx(color && styles[color], styles.textBox)}>
      {who && <div className={styles.who}>{who}</div>}
      <div className={styles.text} onClick={nextPage}>
        {text}
        <NextBtnIcon className={styles.nextBtn} />
      </div>
    </div>
  );
};

export { TextBox };
