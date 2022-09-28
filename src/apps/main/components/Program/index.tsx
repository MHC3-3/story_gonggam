import ProgramData from 'assets/data/program.json';
import { program } from 'types/program';
import Card from './Card';

const Program = () => {
  const data: program[] = [...ProgramData];

  return (
    <div>
      <ul>
        {data.map((pro) => (
          <Card program={pro} key={pro.title} />
        ))}
      </ul>
    </div>
  );
};

export default Program;
