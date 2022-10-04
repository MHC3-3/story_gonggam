import React, { useEffect } from 'react';
import Image from 'next/image';

const KakaoShareButton = () => {
  useEffect(() => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (!window.Kakao.isInitialized()) {
      // javascript key 를 이용하여 initialize
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  const onShareKakaoClick = () => {
    window.Kakao.Share.createCustomButton({
      container: '#kakaotalk-sharing-btn',
      templateId: 83627,
      templateArgs: {
        title: '토리의 하루 체험하기',
        description: "버들마을 주민 '토리'가 되어 스토리공감을 체험해보세요",
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
