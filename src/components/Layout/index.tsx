import { ReactNode } from 'react';
import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
