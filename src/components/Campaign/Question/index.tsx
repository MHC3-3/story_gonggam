import { template } from '@/types/campaign';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { storyArrayAtom, storyCurAtom } from 'recoil/atom';
import { AnswerList } from '../AnswerList';
import styles from './question.module.scss';

const Question = () => {
  const story = useRecoilValue<template[]>(storyArrayAtom);
  const current = useRecoilValue(storyCurAtom);

  return (
    <div className={styles.question}>
      <h3>{story[current].number}</h3>
      <p>{story[current].question}</p>
      {story[current].question && <AnswerList />}
    </div>
  );
};

export { Question };
