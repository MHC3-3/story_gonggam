// import { getTest } from 'apis/test';
import type { NextPage } from 'next';
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
      <Main />
      <footer>푸터(추가정보)</footer>
    </div>
  );
};

export default Home;
