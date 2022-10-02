import { TextBox, Question } from 'components/Campaign';
import { template } from '@/types/campaign';
import { getStory } from 'apis/template';
import { NextPage } from 'next';

import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { storyArrayAtom, storyCurAtom, storyResultAtom } from 'recoil/atom';
import styles from './campaign.module.scss';
import Head from 'next/head';
import Background from '@/components/Campaign/Background';

const Campaign: NextPage = () => {
  const [story, setStory] = useRecoilState<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);
  const setResult = useSetRecoilState(storyResultAtom);

  useEffect(() => {
    (async () => {
      const data = await getStory();
      setStory(data || []);
      console.log(data);
    })();

    setCurrent(0);
    setResult('');
  }, [setCurrent, setResult, setStory]);

  return (
    <div className={styles.campaign}>
      <Head>
        <title>버틀 스토리 공감</title>
      </Head>
      {story[current]?.backgroundImg && <Background />}
      {story[current]?.text && <TextBox />}
      {story[current]?.question && <Question />}
    </div>
  );
};

export default Campaign;
