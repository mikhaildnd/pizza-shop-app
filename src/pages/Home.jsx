import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoadingProducts(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? searchValue : '';

    fetch(
      `https://628bd2d1667aea3a3e36d84e.mockapi.io/products?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&search=${search}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setIsLoadingProducts(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = products
    //Фильтрации для подойдет статического массива
    // .filter((obj) => {
    //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }

    //   return false;
    // })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(8)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort sortValue={sortType} onChangeSort={(idx) => setSortType(idx)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoadingProducts ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
