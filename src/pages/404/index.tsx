import Image from 'next/image';
import Link from 'next/link';
import styles from './error.module.scss';

const error = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h2>잘못된 경로 입니다.</h2>
      <Image src={'/pngs/tory.png'} alt='error' width={248} height={248} />
      <Link href={'/main'}>
        <a className={styles.link}>홈페이지로 돌아가기</a>
      </Link>
    </div>
  );
};

export default error;
