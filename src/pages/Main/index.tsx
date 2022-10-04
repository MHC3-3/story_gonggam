import Image from 'next/image';
import Link from 'next/link';

import styles from './main.module.scss';
import Program from '@/components/Main/Program';
import Slider from 'components/Slider';
import Map from 'components/Map';
import Floor from 'components/Main/Floor';
import { useRef } from 'react';
import Footer from '@/components/Footer';

const Main = () => {
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

  const tabRef = useRef<any>([]);
  const mainRef = useRef<HTMLElement>(null);

  return (
    <main ref={mainRef} className={styles.main}>
      <button
        type='button'
        className={styles.scrollTop}
        onClick={() => {
          mainRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Image src='/pngs/scrollTop.png' width={30} height={30} alt='scrollTop' />
      </button>
      <section className={styles.navi}>
        <div className={styles.textWrap}>
          <h1>
            버들마을의 스토리 공감은
            <br />
            주민들이 서로 소통하고
            <br />
            화합하는 사랑방입니다.
          </h1>
          <ul className={styles.naviList}>
            <li
              onClick={() => {
                tabRef.current[2].scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span />
              <span />
              <span />
              <span />
              3층
            </li>
            <li
              onClick={() => {
                tabRef.current[1].scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className={styles.noBorder} />
              <span />
              <span className={styles.noBorder} />
              <span />
              2층
            </li>
            <li
              onClick={() => {
                tabRef.current[0].scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span />
              <span />
              <span />
              <span />
              1층
            </li>
          </ul>
          <p>각 층을 클릭하시면 층별 안내를 볼 수 있습니다.</p>
        </div>
        <Image src='/pngs/main.png' alt='main' layout='fill' />
      </section>
      <section className={styles.campaign}>
        <Link href={'/campaign'}>
          <Image src='/pngs/campaign.png' alt='campaign' layout='fill' />
        </Link>
      </section>
      <section ref={(el) => (tabRef.current[0] = el)}>
        <Floor
          floor='1층'
          title='Story 공감 카페'
          subTitle='스토리 공감은 마을 북카페로서, 책과 함께 마음의 양식을 쌓을 수 있고 다양한 수제 음료와
        다과가 준비되어있습니다.'
        >
          <Slider imgs={cafeArray} alt='cafe' />
        </Floor>
      </section>
      <section ref={(el) => (tabRef.current[1] = el)}>
        <Floor
          floor='2층'
          title='생활문화지원센터'
          subTitle='생활문화 프로그램은 누구나 신청 가능하며 난타, 기타교실, 라틴댄스, 댄스로빅, 요가 등 다양한 강습과 체험프로그램을 진행하고 있습니다.'
        >
          <Program />
        </Floor>
      </section>
      <section ref={(el) => (tabRef.current[2] = el)}>
        <Floor
          floor='3층'
          title='바리스타 교육장'
          subTitle='바리스타 교육과 동시에 자격검정(자격취득)이 한 곳에서 이루어져 교육생들의 만족도를 높이고 전문 기술 습득과 일자리 창출의 기회가 되어 꾸준한 수요를 창출하고 있습니다.'
        >
          <Slider imgs={bariArray} alt='barista' />
          <dl className={styles.definition}>
            <dt>프로그램 교육 시간 및 장소</dt>
            <dd>바리스타 1급 : 매주 화, 목 오후6시30분~9시30분</dd>
            <dd>바리스타 2급 : 매주 월, 수 오후6시30분~9시30분</dd>
            <dd>3층 바리스타 교육장</dd>
            <dt>프로그램 신청문의</dt>
            <dd>010-2673-2405 / 010-3335-6707</dd>
          </dl>
        </Floor>
      </section>
      <section className={styles.map}>
        <h2>찾아오시는길</h2>
        <Map />
        <h4>
          <a href='https://naver.me/FXrVPMvD' target='_blank' rel='noreferrer'>
            서울특별시 구로구 오류로8길 51 스토리공감
          </a>
        </h4>
        <dl className={styles.definition}>
          <dt>이용시간</dt>
          <dd>10:00~21:00 (일요일은 휴무입니다.)</dd>
          <dt>연락처</dt>
          <dd>02-2686-5952</dd>
        </dl>
      </section>
      <section className={styles.infoWrap}>
        <div className={styles.textWrap}>
          <h3>
            버들마을 스토리공감은
            <br />
            주민들이 주도적으로 공동체를 형성하고
            <br />
            마을재생 사업을 구로구와 서울시가 함께 펼친 관리형 주거 환경 개선사업으로 조성
            되었습니다.
          </h3>
          <hr />
          <p>
            재개발, 재건축 등의 전면 철거방식이 아닌 그지역 원주민의 의견을 반영해 마을의 물리적,
            사회 문화적, 경제적 환경을 종합적으로 개선해 나가는 주민 참여형 재생 방식입니다.
            <span>1층에는 주민 공유공간인 마을카페,</span>
            <span>2층에는 생활문화지원센터,</span>
            <span>3층에는 바리스타 아카데미 교육장이 갖춰져 있습니다.</span>
          </p>

          <hr />
          <h4>
            생활문화 프로그램은 누구나 신청 가능하며
            <br />
            다양한 강습과 체험 프로그램을 진행하고 있습니다.
          </h4>
        </div>
        <Image src='/pngs/info.png' layout='fill' alt='info' />
      </section>
      <Footer />
    </main>
  );
};

export default Main;
