import React, { useEffect } from 'react';
import Image from 'next/image';

interface Props {
  resultName?: string;
  title?: string;
}

const KakaoShareButton = ({ resultName, title }: Props) => {
  useEffect(() => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (!window.Kakao.isInitialized()) {
      // javascript key 를 이용하여 initialize
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  const onShareKakaoClick = () => {
    console.log(resultName);
    window.Kakao.Share.createCustomButton({
      container: '#kakaotalk-sharing-btn',
      templateId: 83627,
      templateArgs: {
        thu:
          `https://mhc3-3tory-bucket.s3.ap-northeast-2.amazonaws.com/kakaoToryImg/` +
          resultName +
          `.png`,
        title: title,
      },
    });
    window.dataLayer.push({
      event: 'kakao_share',
    });
  };

  return (
    <>
      {/* Kakao share button */}
      <button id='kakaotalk-sharing-btn' onClick={onShareKakaoClick}>
        <Image
          src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
          alt='kakao-share-icon'
          layout='fill'
        />
      </button>
    </>
  );
};

export default KakaoShareButton;
