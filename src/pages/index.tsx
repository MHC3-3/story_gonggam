import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';

import Main from './Main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>버들 스토리 공감</title>
      </Head>
      <Main />
      <footer>푸터(추가정보)</footer>
    </div>
  );
};

export default Home;
