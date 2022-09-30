import { NextPage } from 'next';
import React, { useEffect } from 'react';
import KakaoShareButton from '@/components/kakaoShareButton';

const ResultPage: NextPage = () => {
  return (
    <main>
      <section className='ToryResult'>토리결과 부분</section>
      <section className='ProgramBanner'>웹 페이지 배너</section>
      <section className='BestPartner'>나와 잘 맞는 토리</section>
      <section className='SnsShare'>
        <KakaoShareButton />
        <div className='down_btn'>
          <a
            href='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/resultToryImg/dance.png'
            download
          >
            <button>이미지 저장</button>
          </a>
        </div>
      </section>
      <section className='ProgramBanner'>프로그램 배너</section>
    </main>
  );
};

export default ResultPage;
