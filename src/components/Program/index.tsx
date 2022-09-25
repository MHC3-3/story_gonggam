import { useState } from 'react';
import ProgramData from 'assets/data/program.json';
import { program, programmodal } from 'types/program';
import Card from './Card';
import styles from './program.module.scss';

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
