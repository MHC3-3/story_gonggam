import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import styles from './slider.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  imgs: string[];
  alt: string;
}

const Slider = ({ imgs, alt }: Props) => {
  return (
    <div className={styles.slider}>
      <Carousel showStatus={false} showArrows={true} autoPlay showThumbs={false} infiniteLoop>
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
