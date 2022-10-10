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
import Apply from '@/components/Result/Apply';

const StoryResult: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [outcome, setOutCome] = useState<IgetResult>();
  const [showPopup, setShowPopup] = useState(false);
  const [apply, setApply] = useState(false);
  let popupDelay: NodeJS.Timer;

  const URL = 'https://www.story-gonggam.com/' + router.query.result;

  const handleCaptureClick = () => {
    html2canvas(document.getElementById('resultTory') as HTMLElement, {
      useCORS: true,
    }).then((canvas) => {
      onSaveAs(canvas.toDataURL(), 'tory.png');
    });
    window.dataLayer.push({
      event: 'image_save',
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
    link.target = '_blank';
    link.click();
    document.body.removeChild(link);
  };

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

  const { title, description, partnerModel, name, count } = outcome;

  return (
    <div className={styles.result}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.popupWrapper}>
        <Popup popupMessage='클립보드에 복사되었습니다.' showPopup={showPopup} />
      </div>
      {apply && (
        <div>
          <Apply setApply={setApply} />
        </div>
      )}
      <section className={styles.toryResult}>
        <h2 className={styles.toryTitle}>
          토리의 하루를 무사히 마친 당신,
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
        <div className={styles.countDescription}>
          <span>나와 같은 토리 유형이 나온 사람은</span>
          <span className={styles.count}>{count}</span>
          <span>명입니다.</span>
        </div>
        <p className={styles.toryP2}>{description}</p>

        <p className={styles.toryP3}>해당 프로그램에 대한 자세한 정보가 궁금하다면?</p>
        <div className={styles.shortcuts}>
          <Link href={'/main/#floor2'}>
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
        <Link href={'/'}>
          <a className={styles.link}>토리의 하루 다시 경험하기</a>
        </Link>
      </section>
      <hr className={styles.hr} />
      <section className={styles.programBanner}>
        <h3>퀴즈를 맞추시면 선물을 드립니다!</h3>
        <div>
          <Image src={'/pngs/eventImg.png'} alt='programBanner' width={400} height={340} />
        </div>
        <h4>토리의 하루를 참여해 주신 분들께 드리는 선물입니다.</h4>
        <ol start={1}>
          <li>
            토리의 하루 스토리 화면 속 히든 메세지를 맞춰 주시는 분들께 추첨을 통해 그립톡 or 휴대폰
            거치대를 토리 스티커 굿즈와 함께 드립니다.
          </li>
          <li>
            추가로 나만의 토리 이미지를 저장해 아래 해시태그와 함께 인스타그램 피드에 게재해주시면
            토리 스티커 굿즈를 포함한 그립톡과 휴대폰 거치대 모두를 드립니다.
          </li>
        </ol>
        <button type='button' className={styles.applyBtn} onClick={() => setApply(true)}>
          퀴즈 맞추고 선물 받으러 가기
        </button>
        <h3 className={styles.copy}>#버들마을 #스토리공감 #토리의하루</h3>
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
            <KakaoShareButton resultName={name} title={title} />
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
          <Link href={'/main'}>
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
    return {
      props: {},
    };
  }
};
