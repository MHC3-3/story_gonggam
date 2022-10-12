import { CloseIcon } from '@/assets/svgs';
import { useScrollLock } from '@/hooks/useScrollLock';
import { CampaignApply } from 'apis/result';
import { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import Popup from '../Popup';
import styles from './apply.module.scss';

interface Props {
  setApply: Dispatch<SetStateAction<boolean>>;
}

const Apply = ({ setApply }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popup, setPopup] = useState('');
  let popupDelay: NodeJS.Timer;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      answer: { value: string };
      name: { value: string };
      phone: { value: string };
    };
    const answer = target.answer.value;
    const name = target.name.value;
    const phone = target.phone.value;
    const data = CampaignApply({
      name: name,
      phoneNumber: phone,
      answer: answer,
    });

    data.then((response) => {
      setPopup(response.message);
    });
    openPopup();
  };

  const openPopup = () => {
    setShowPopup(true);
    if (popupDelay) clearTimeout(popupDelay);
    popupDelay = setTimeout(() => {
      setShowPopup(false);
      setApply(false);
    }, 800);
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className={styles.applyWrap}>
      <div className={styles.apply}>
        <div className={styles.popupWrapper}>
          <Popup popupMessage={popup} showPopup={showPopup} />
        </div>
        <h3 className={styles.title}>
          토리의 하루에서 나온 히든메세지는
          <br />
          어떤 내용일까요?
        </h3>
        <CloseIcon className={styles.close} onClick={() => setApply(false)} />
        <form onSubmit={handleSubmit}>
          <ul className={styles.radio}>
            <li>
              <label htmlFor='apply1'>
                <input type='radio' id='apply1' name='answer' value={'#토리왔다감'} />
                <span>#토리왔다감</span>
              </label>
            </li>
            <li>
              <label htmlFor='apply2'>
                <input type='radio' id='apply2' name='answer' value={'#토리가최고'} />
                <span>#토리가최고</span>
              </label>
            </li>
            <li>
              <label htmlFor='apply3'>
                <input type='radio' id='apply3' name='answer' value={'#담지가최고'} />
                <span>#담지가최고</span>
              </label>
            </li>
          </ul>
          <hr className={styles.hr} />
          <p className={styles.info}>선물 수령을 위한 정보를 입력해주세요.</p>
          <input
            type='text'
            name='name'
            placeholder='성함을 입력해 주세요.'
            className={styles.input}
          />
          <input
            type='text'
            name='phone'
            placeholder='연락처을 입력해 주세요.'
            className={styles.input}
          />
          <p className={styles.info2}>
            *입력해주신 개인정보는 이벤트 선물 수령안내를 위한 용도로만 사용됩니다.
          </p>
          <button type='submit' className={styles.btn}>
            응모하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
