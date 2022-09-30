import { NextBtnIcon } from '@/assets/svgs';
import { template } from '@/types/campaign';
import { useRecoilState, useRecoilValue } from 'recoil';
import { storyArrayAtom, storyCurAtom } from 'recoil/atom';
import styles from './textBox.module.scss';
import cx from 'classnames';

const TextBox = () => {
  const story = useRecoilValue<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);

  const { color, who, text } = story[current];

  const nextPage = () => {
    setCurrent(current + 1);
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
