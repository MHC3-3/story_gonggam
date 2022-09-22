import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

interface Props {
  imgs: string[];
  alt: string;
}

const Slider = ({ imgs, alt }: Props) => {
  return (
    <Carousel>
      {imgs.map((url, idx) => {
        return (
          <div key={`slider-item-${url}`}>
            <Image src={url} alt={alt + '' + idx} layout='fill' />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
