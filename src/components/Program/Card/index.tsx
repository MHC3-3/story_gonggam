import { program } from '@/types/program';
import Image from 'next/image';

interface Props {
  program: program;
  onClick: () => void;
}

const Card = ({ program, onClick }: Props) => {
  return (
    <li>
      <div>
        <h3>{program.title}</h3>
        <p>{program.info}</p>
        <button type='button' onClick={onClick}></button>
      </div>
      <div>
        <Image src={program.img} width={195} height={195} />
      </div>
    </li>
  );
};

export default Card;
