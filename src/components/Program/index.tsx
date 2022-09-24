import React from 'react';
import ProgramData from 'assets/data/program.json';
import { program } from 'types/program';
import Card from './Card';
import styles from './program.module.scss';

const Program = () => {
  const data: program[] = [...ProgramData];

  const onClick = () => {};
  return (
    <ul>
      {data.map((pro) => (
        <Card program={pro} key={pro.title} onClick={onClick} />
      ))}
    </ul>
  );
};

export default Program;
