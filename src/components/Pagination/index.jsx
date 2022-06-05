import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  // console.log(currentPage);
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="Вперед"
      previousLabel="Назад"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
