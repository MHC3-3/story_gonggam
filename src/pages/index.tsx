import SubTitle from '@/components/SubTitle';
// import { getTest } from 'apis/test';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const Home: NextPage = () => {
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   (async () => {
  //     const data = await getTest();
  //     setText(data || 'fail');
  //   })();
  // }, []);

  const sectionClick = () => {};

  return (
    <div>
      <Head>
        <title>버틀스토리 공감</title>
        <meta name='description' content='오류동 버들스토리공감 많이 찾아와 주세요' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className={styles.navi}>
          <div className={styles.textWrap}>
            <h1>버들마을의 스토리 공감은 주민들이 서로 소통하고 화합하는 사랑방입니다.</h1>
            <ul className={styles.naviList}>
              <li>3층</li>
              <li>2층</li>
              <li>1층</li>
            </ul>
            <p>각 층을 클릭하시면 층별 안내를 볼 수 있습니다.</p>
          </div>
          <Image src='/pngs/main.png' alt='main' layout='fill' />
        </section>
        <section>
          <Link href={'/campaign'}>
            <Image src='/pngs/campaign.png' alt='campaign' width={390} height={82} />
          </Link>
        </section>
        <section>
          <SubTitle
            floor='1층'
            title='Story 공감 카페'
            subTitle='스토리 공감은 마을 북카페로서, 책과 함께 마음의 양식을 쌓을 수 있고 다양한 수제 음료와
            다과가 준비되어있습니다.'
            onClick={sectionClick}
          />

          {/* <div>
            <Image src='/pngs/cafe/cafe1.png' alt='cafe1' layout='fill' />
            <Image src='/pngs/cafe/cafe2.png' alt='cafe2' layout='fill' />
            <Image src='/pngs/cafe/cafe3.png' alt='cafe3' layout='fill' />
            <Image src='/pngs/cafe/cafe4.png' alt='cafe4' layout='fill' />
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default Home;
