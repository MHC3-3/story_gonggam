import { getTest } from 'apis/template';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Main from './Main';

const Home: NextPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getTest();
      setText(data || 'fail');
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <Main />
      <footer>푸터(추가정보)</footer>
    </div>
  );
};

export default Home;
