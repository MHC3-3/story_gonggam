import Slider from '@/components/Slider';
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
  const cafeArray = [
    '/pngs/cafe/cafe1.png',
    '/pngs/cafe/cafe2.png',
    '/pngs/cafe/cafe3.png',
    '/pngs/cafe/cafe4.png',
  ];
  const bariArray = [
    '/pngs/barista/barista1.png',
    '/pngs/barista/barista2.png',
    '/pngs/barista/barista3.png',
    '/pngs/barista/barista4.png',
  ];
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
          <Slider imgs={cafeArray} alt='cafe' />

          {/* <div>
            <Image src='/pngs/cafe/cafe1.png' alt='cafe1' layout='fill' />
            <Image src='/pngs/cafe/cafe2.png' alt='cafe2' layout='fill' />
            <Image src='/pngs/cafe/cafe3.png' alt='cafe3' layout='fill' />
            <Image src='/pngs/cafe/cafe4.png' alt='cafe4' layout='fill' />
          </div> */}
        </section>
        <section>
          <SubTitle
            floor='2층'
            title='생활문화지원센터'
            subTitle='생활문화 프로그램은 누구나 신청 가능하며 난타, 기타교실, 라틴댄스, 댄스로빅, 요가 등 다양한 강습과 체험프로그램을 진행하고 있습니다.'
            onClick={sectionClick}
          />
        </section>
        <section>
          <SubTitle
            floor='3층'
            title='바리스타 교육장'
            subTitle='바리스타 교육과 동시에 자격검정(자격취득)이 한 곳에서 이루어져 교육생들의 만족도를 높이고 전문 기술 습득과 일자리 창출의 기회가 되어 꾸준한 수요를 창출하고 있습니다.'
            onClick={sectionClick}
          />
          <Slider imgs={bariArray} alt='barista' />
        </section>
        <section>
          <h2>찾아오시는길</h2>
          <dl>
            <dt>이용시간</dt>
            <dd>10:00~18:00 (일요일은 휴무입니다.)</dd>
            <dt>연락처</dt>
            <dd>02-2686-5952</dd>
          </dl>
        </section>
      </main>
    </div>
  );
};

export default Home;
