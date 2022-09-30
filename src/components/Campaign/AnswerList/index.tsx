import styles from './answer.module.scss';

interface Props {
  answer: string[];
}

const AnswerList = ({ answer }: Props) => {
  return (
    <div className={styles.answer}>
      {answer.map((answer, idx) => (
        <button type='button' key={answer + idx} className={styles.button}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export { AnswerList };
