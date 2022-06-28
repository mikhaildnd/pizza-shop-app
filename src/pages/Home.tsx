import { FC, useCallback, useEffect, useRef } from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';

import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from './../components';
import { useAppDispatch } from '../redux/store';
import { SearchPizzaParams } from '../@types/types';
import { selectFilter } from '../redux/filter/selectors';
import { selectPizzasData } from '../redux/product/selectors';
import { fetchPizzas } from '../redux/product/asyncActions';

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { products, status } = useSelector(selectPizzasData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  // todo сделать кнопку "кол-во отображаемых прродуктов"
  const limitProductsOnPage = 4;

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (pageNum: number) => {
    dispatch(setCurrentPage(pageNum));
  };

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? searchValue : '';

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        limitProductsOnPage: String(limitProductsOnPage),
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  // // Если изменили параметры и был первый рендер
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });

  //     navigate(`?${queryString}`);
  //   }

  //   isMounted.current = true;
  // }, [sort.sortProperty, categoryId, currentPage]);

  // // Если был первый рендер, то проверяем параметры и сохраняем в редаксе
  // useEffect(() => {
  //   //useSearchParams можно использовать (react-router-dom)
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     console.log(params);

  //     const sortObj = sortList.find((obj) => obj.sortProperty === params.sort);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sortObj || sortList[0],
  //       }),
  //     );
  //     // dispatch(
  //     //   setFilters({
  //     //     ...params,
  //     //     // @ts-ignore
  //     //     sort,
  //     //   }),
  //     // );
  //     isSearch.current = true;
  //   }
  // }, []);

  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = products.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(limitProductsOnPage)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>Не удалось загрузить пиццы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
