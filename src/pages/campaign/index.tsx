import { TextBox, Question, Background, HiddenBox } from 'components/Campaign';
import { template } from '@/types/campaign';
import { getStory } from 'apis/template';
import { InferGetStaticPropsType, NextPage } from 'next';

import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { storyArrayAtom, storyCurAtom, storyResultAtom } from 'recoil/atom';
import styles from './campaign.module.scss';
import Head from 'next/head';

const Campaign: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [story, setStory] = useRecoilState<template[]>(storyArrayAtom);
  const [current, setCurrent] = useRecoilState(storyCurAtom);
  const setResult = useSetRecoilState(storyResultAtom);

  useEffect(() => {
    setStory(props.data);
    setCurrent(0);
    setResult('');
  }, [props, setCurrent, setResult, setStory]);

  return (
    <div className={styles.campaign}>
      <Head>
        <title>토리의 하루</title>
      </Head>
      {story[current]?.backgroundImg && <Background />}
      {story[current]?.text && <TextBox />}
      {story[current]?.question && <Question />}
      {story[current]?.hidden && <HiddenBox />}
    </div>
  );
};

export const getStaticProps = async () => {
  return getStory();
};

export default Campaign;
