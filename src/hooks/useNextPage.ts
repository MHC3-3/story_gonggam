import { useRecoilState } from 'recoil';
import { storyCurAtom } from 'recoil/atom';

const useNextPage = () => {
  const [current, setCurrent] = useRecoilState(storyCurAtom);

  return setCurrent(current + 1);
};

export default useNextPage;
