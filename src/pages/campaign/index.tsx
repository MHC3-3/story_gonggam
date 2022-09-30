import { TextBox, Question } from 'components/Campaign';
import { template } from '@/types/campaign';
import { getTest } from 'apis/template';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { storyArrayAtom, storyCurAtom } from 'recoil/atom';
import styles from './campaign.module.scss';

const Campaign: NextPage = () => {
  const [story, setStory] = useRecoilState<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);

  useEffect(() => {
    (async () => {
      const data = await getTest();
      setStory(data || []);
      console.log(data);
    })();

    setCurrent(2);
  }, []);

  const nextPage = () => {
    setCurrent(current + 1);
  };

  return (
    <div className={styles.campaign}>
      {current}
      <div
        className={styles.bgImg}
        onClick={current === 9 || current === 12 || current === 23 ? nextPage : undefined}
      >
        {story[current]?.backgroundImg && (
          <Image src={story[current]?.backgroundImg} alt={`background` + current} layout='fill' />
        )}
      </div>
      {story[current]?.text && <TextBox />}
      {story[current]?.question && <Question />}
    </div>
  );
};

export default Campaign;
