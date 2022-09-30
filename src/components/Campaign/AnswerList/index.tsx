import { template } from '@/types/campaign';
import { useRecoilState, useRecoilValue } from 'recoil';
import { storyArrayAtom, storyCurAtom } from 'recoil/atom';
import styles from './answer.module.scss';

const AnswerList = () => {
  const story = useRecoilValue<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);
  const { answer } = story[current];

  const nextPage = (idx) => {
    setCurrent(current + 1);
  };

  return (
    <div className={styles.answer}>
      {answer?.map((answer, idx) => (
        <button
          type='button'
          onClick={() => nextPage(idx)}
          key={answer + idx}
          className={styles.button}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export { AnswerList };
