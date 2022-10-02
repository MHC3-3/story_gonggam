import { template } from '@/types/campaign';
import { useRecoilState, useRecoilValue } from 'recoil';
import { storyArrayAtom, storyCurAtom, storyResultAtom } from 'recoil/atom';
import styles from './answer.module.scss';

const AnswerList = () => {
  const story = useRecoilValue<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);
  const [result, setResult] = useRecoilState(storyResultAtom);

  const { answer } = story[current];

  const nextPage = (idx: number) => {
    setCurrent(current + 1);
    setResult(result + idx);
  };

  return (
    <div className={styles.answer}>
      {answer?.map((answer, idx) => (
        <button
          type='button'
          onClick={() => nextPage(idx + 1)}
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
