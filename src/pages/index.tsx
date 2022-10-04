import type { NextPage } from 'next';
import Head from 'next/head';

import Main from './Main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>버들 스토리 공감</title>
      </Head>
      <Main />
    </div>
  );
};

export default Home;
