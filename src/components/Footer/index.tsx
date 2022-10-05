import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>
        STORY 공감
        <span>서울특별시 구로구 오류로8길 51 스토리공감</span>
      </h3>
      <p>Made by. 버들시삼토리팀</p>
      <div className={styles.footerImg}>
        <Image src='/pngs/threeShot.png' alt='threeShot' width={82} height={32} />
      </div>
    </footer>
  );
};

export default Footer;
