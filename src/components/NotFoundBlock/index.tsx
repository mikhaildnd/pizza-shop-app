import { FC } from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span className={styles.smile}>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>Страница отсутствует</p>
    </div>
  );
};
