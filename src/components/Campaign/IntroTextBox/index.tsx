import { NextBtnIcon } from '@/assets/svgs';
import styles from './introTextBox.module.scss';
import cx from 'classnames';

interface Props {
  color?: string;
  who?: string;
  text?: string;
}

const IntroTextBox = ({ color, who, text }: Props) => {
  return (
    <>
      <div className={cx(color && styles[color], styles.textBox)}>
        {who && <div className={styles.who}>{who}</div>}
        <div className={styles.text}>
          {text}
          <NextBtnIcon className={styles.nextBtn} />
        </div>
      </div>
    </>
  );
};

export { IntroTextBox };
