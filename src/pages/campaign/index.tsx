import { TextBox, Question } from 'components/Campaign';
import { template } from '@/types/campaign';
import { getStory } from 'apis/template';
import { NextPage } from 'next';
// import Image from 'next/image';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { storyArrayAtom, storyCurAtom } from 'recoil/atom';
import styles from './campaign.module.scss';
import Head from 'next/head';

const Campaign: NextPage = () => {
  const [story, setStory] = useRecoilState<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);

  useEffect(() => {
    (async () => {
      const data = await getStory();
      setStory(data || []);
      console.log(data);
    })();

    setCurrent(2);
  }, [setCurrent, setStory]);

  const nextPage = () => {
    setCurrent(current + 1);
  };

  return (
    <div className={styles.campaign}>
      <Head>
        <title>버틀 스토리 공감</title>
      </Head>
      {current}
      <div
        className={styles.bgImg}
        onClick={current === 9 || current === 12 || current === 23 ? nextPage : undefined}
      >
        {story[current]?.backgroundImg && (
          <picture>
            <source srcSet={story[current]?.backgroundImg} type='image/webp' />
            <img src={story[current]?.backgroundImg} alt={`background` + current} />
          </picture>
        )}
      </div>
      {story[current]?.text && <TextBox />}
      {story[current]?.question && <Question />}
    </div>
  );
};

export default Campaign;
