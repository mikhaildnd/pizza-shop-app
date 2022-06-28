import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationType } from '../../@types/types';

import styles from './Pagination.module.scss';

export const Pagination: FC<PaginationType> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="Вперед"
      previousLabel="Назад"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};
