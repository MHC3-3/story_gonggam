/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import html2canvas from 'html2canvas';

import styles from './result.module.scss';
import { ImgSaveIcon, LinkChainIcon } from '@/assets/svgs';
import { IgetResult, IResResult } from '@/types/result';
import endpoint from 'apis/endpoint';
import KakaoShareButton from '@/components/kakaoShareButton';
import Popup from '@/components/Result/Popup';

const StoryResult: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [outcome, setOutCome] = useState<IgetResult>();
  const [showPopup, setShowPopup] = useState(false);
  let popupDelay: NodeJS.Timer;

  const URL = 'https://www.story-gonggam.com/campaign/' + router.query.result;

  const handleCaptureClick = () => {
    html2canvas(document.getElementById('resultTory') as HTMLElement, {
      useCORS: true,
    }).then((canvas) => {
      onSaveAs(canvas.toDataURL(), 'tory.png');
    });

    window.dataLayer.push({
      event: 'kakao_share',
    });
  };

  const handleClipboardButtonClick = (string: string) => {
    navigator.clipboard.writeText(string);

    openCopyPopup();
  };

  const onSaveAs = (uri: string, filename: string) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  // const onSaveAs = (uri: string, filename: string) => {
  //   var win = window.open();
  //   win?.document.open();
  //   win?.document.write('<iframe src="' + uri + '"></iframe>');
  //   const link = document.createElement('a');
  //   win?.document.body.appendChild(link);
  //   link.href = uri;
  //   link.download = filename;
  //   link.click();
  //   win?.close();
  // };

  const openCopyPopup = () => {
    setShowPopup(true);
    if (popupDelay) clearTimeout(popupDelay);
    popupDelay = setTimeout(() => {
      setShowPopup(false);
    }, 800);
  };

  useEffect(() => {
    setOutCome(props.data);
  }, [props.data]);

  if (router.isFallback) return <div>로딩중</div>;

  if (!outcome) return null;

  const { title, description, partnerModel, name } = outcome;

  return (
    <div className={styles.result}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.popupWrapper}>
        <Popup popupMessage='클립보드에 복사되었습니다.' showPopup={showPopup} />
      </div>
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
        <div id='resultTory' className={styles.toryImgWrap}>
          <div className={styles.toryImg}>
            <img src={`/pngs/result/` + name + `.png`} alt='result-img' />
          </div>
          <h3 className={styles.subTitle}>{title}</h3>
        </div>
        <p className={styles.toryP2}>{description}</p>

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
          onClick={() => handleClipboardButtonClick('#버들마을 #스토리공감 #토리의하루')}
        >
          해시태그 복사하기
        </button>
      </section>
      <hr className={styles.hr} />
      <section className={styles.snsShare}>
        <h3>공유하기</h3>
        <ul className={styles.shareList}>
          <li>
            <KakaoShareButton />
            <p>카카오톡</p>
          </li>
          <li>
            <button onClick={() => handleClipboardButtonClick(URL)}>
              <LinkChainIcon />
            </button>
            <p>링크복사</p>
          </li>
          <li>
            <button onClick={handleCaptureClick}>
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

export const getStaticPaths = async () => {
  // // posts를 받기 위해 fetch
  const res = await endpoint.get(`/api/result/case`);

  const posts = await res.data.result;

  // pre-render할 Path를 얻음 (posts를 통해서)
  const paths = posts.map((post: any) => ({
    params: { result: post.code },
  }));

  // 우리는 오로지 이 path들만 빌드타임에 프리렌더 함
  // { fallback: false } 는 다른 routes들은 404임을 의미
  // true이면 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 거라는 뜻
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  try {
    const response = await endpoint.get<IResResult>(`/api/result?code=${params?.result}`);
    const data = response.data.result;
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
