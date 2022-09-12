import { getTest } from 'apis/test';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import { useEffect, useState } from 'react';
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getTest();
      setText(data || 'fail');
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>버틀스토리 공감</title>
        <meta name='description' content='오류동 버들스토리공감 많이 찾아와 주세요' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{text}</main>
    </div>
  );
};

export default Home;
