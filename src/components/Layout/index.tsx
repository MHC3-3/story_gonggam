import { ReactNode } from 'react';
import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
