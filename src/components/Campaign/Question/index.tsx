import React from 'react';
import styles from './question.module.scss';

const Question = () => {
  return (
    <div className={styles.question}>
      <h3>Q1</h3>
      <p>기상시간이 되었는지 알람소리가 들린다. 토리를 깨우는 알림음은?</p>
    </div>
  );
};

export { Question };
