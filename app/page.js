import Image from 'next/image';
import styles from './page.module.css';
import { ButtonClick } from './components/ButtonClick';

export default function Home() {
  return (
    <main className={styles.main}>
      <ButtonClick />
    </main>
  );
}
