// import { getTest } from 'apis/test';
import type { NextPage } from 'next';
import Head from 'next/head';
import Main from './Main';

const Home: NextPage = () => {
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   (async () => {
  //     const data = await getTest();
  //     setText(data || 'fail');
  //   })();
  // }, []);

  return (
    <div>
      {/* <Head>
        <title>버틀스토리 공감</title>
        <meta name='description' content='오류동 버들스토리공감 많이 찾아와 주세요' />
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <Main />
    </div>
  );
};

export default Home;
