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
    </div>
  );
};

export default Home;
