import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import styles from './slider.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cx from 'classnames';

interface Props {
  imgs: string[];
  alt: string;
}

const Slider = ({ imgs, alt }: Props) => {
  return (
    <div className={styles.slider}>
      <Carousel
        showStatus={false}
        showArrows={true}
        autoPlay
        showThumbs={false}
        infiniteLoop
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button onClick={clickHandler} className={cx(styles.arrowBtn, styles.left)}>
              <Image src='/pngs/arrow/left.png' alt='left' width={32} height={32} />
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button onClick={clickHandler} className={cx(styles.arrowBtn, styles.right)}>
              <Image src='/pngs/arrow/right.png' alt='right' width={32} height={32} />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            display: 'inline-block',
            marginLeft: 10,
            background: '#ced4da',
            cursor: 'pointer',
            width: '8px',
            height: '8px',
            borderRadius: '10px',
          };
          const style = isSelected ? { ...defStyle, background: '#495057' } : { ...defStyle };
          return (
            <span
              style={style}
              className={styles.indicator}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role='button'
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></span>
          );
        }}
      >
        {imgs.map((url, idx) => {
          return (
            <div className={styles.list} key={`slider-item-${url}`}>
              <Image src={url} alt={alt + '' + idx} width={358} height={224} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
