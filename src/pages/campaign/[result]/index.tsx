import { ImgSaveIcon, LinkChainIcon } from '@/assets/svgs';
import KakaoShareButton from '@/components/kakaoShareButton';
import { IgetResult } from '@/types/result';
import { getResult } from 'apis/template';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import styles from './result.module.scss';

const StoryResult: NextPage = () => {
  const router = useRouter();
  const { result } = router.query;
  const [outcome, setOutCome] = useState<IgetResult>();

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      const data = await getResult(result);
      setOutCome(data);
      console.log(data);
    })();
  }, [result, router.isReady]);

  if (!outcome) return <div>잘못들어오심</div>;

  const { title, description, resultToryImg, partnerModel } = outcome;

  return (
    <div className={styles.result}>
      <Script src='https://developers.kakao.com/sdk/js/kakao.js' />
      <section className={styles.toryResult}>
        <h2 className={styles.toryTitle}>
          토리의 하루를 함께 해준 당신,
          <br />
          수고했어요!
        </h2>
        <p className={styles.toryP1}>
          오늘도 하나의 STORY를 만들어낸 당신을 위해 스토리공감에서
          <br />
          당신에게 어울리는 프로그램 유형을 추천해 드릴게요.
        </p>
        <div>
          <div className={styles.toryImg}>
            <Image src={resultToryImg} alt='result-img' width={352} height={314} />
          </div>
          <h3 className={styles.subTitle}>{title}</h3>
          <p className={styles.toryP2}>{description}</p>
        </div>
        <p className={styles.toryP3}>해당 프로그램에 대한 자세한 정보가 궁금하다면?</p>
        <div className={styles.shortcuts}>
          <Link href={'/'}>
            <Image src={'/pngs/shortcuts.png'} alt='result-img' layout='fill' />
          </Link>
        </div>
      </section>
      <section className={styles.bestPartner}>
        <h3 className={styles.title}>나와 잘 맞는 토리</h3>
        <div className={styles.partnerImg}>
          <Image src={partnerModel.partnerImg} alt='best-partner-img' width={352} height={314} />
        </div>
        <p className={styles.subTitle}>{partnerModel.partnerTitle}</p>
        <Link href={'/campaign'}>
          <a className={styles.link}>토리의 하루 다시 경험하기</a>
        </Link>
      </section>
      <hr className={styles.hr} />
      <section className={styles.programBanner}>
        <div>
          <Image src={'/pngs/programBanner.png'} alt='programBanner' width={390} height={210} />
        </div>
        <p>
          나만의 토리 이미지를 저장해 위 해시태그와 함께 인스타그램 피드에 게재해주신 분들께 추첨을
          통해 소정의 굿즈를 드립니다.
          <br />
          추가로 토리의 하루 속 숨겨진 히든 메시지의 퀴즈 정답을 맞춰 피드 글에 작성해 주시면 당첨
          기회가 올라갑니다!
        </p>
        <h3>#버들마을 #스토리공감 #토리의하루</h3>
        <button
          className={styles.copyBtn}
          onClick={() => navigator.clipboard.writeText('#버들마을 #스토리공감 #토리의하루')}
        >
          {/* TODO:알림창 */}
          해쉬태그 복사하기
        </button>
      </section>
      <hr className={styles.hr} />
      <section className={styles.snsShare}>
        <h3>공유하기</h3>
        <ul className={styles.shareList}>
          <li>
            <KakaoShareButton />
            {/* <Image
                src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
                alt='kakao-share-icon'
                layout='fill'
              /> */}
            <p>카카오톡</p>
          </li>
          <li>
            <button>
              <LinkChainIcon />
            </button>
            <p>링크복사</p>
          </li>
          <li>
            {/* <div className='down_btn'>
              <a
                href='https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/resultToryImg/dance.png'
                download
              >
                <button>이미지</button>
              </a>
            </div> */}
            <button>
              <ImgSaveIcon />
            </button>
            <p>이미지저장</p>
          </li>
        </ul>
        <p className={styles.shareP}>스토리 공감에 대한 자세한 정보가 궁금하다면?</p>
        <div>
          <Link href={'/'}>
            <Image src={'/pngs/shortcuts2.png'} alt='홈페이지 바로가기' width={390} height={72} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StoryResult;
