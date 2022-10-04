import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>
        STORY 공감
        <span>서울특별시 구로구 오류로8길 51 스토리공감</span>
      </h3>
      <p>Made by. 버들시삼토리팀</p>
    </footer>
  );
};

export default Footer;
