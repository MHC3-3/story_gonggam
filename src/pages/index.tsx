import type { NextPage } from 'next';
import Head from 'next/head';

import Main from './Main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>버틀 스토리 공감</title>
      </Head>
      <Main />
      <footer>푸터(추가정보)</footer>
    </div>
  );
};

export default Home;
