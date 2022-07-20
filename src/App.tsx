// import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
// import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';

import './scss/app.scss';

const Cart = lazy(() => import(/* webpackChunkName: "cart" */ './pages/Cart'));

// const Cart = Loadable({//умеет работать c ssr, react.lazy - нет
//   loader: () => import(/* webpackChunkName: "cart" */ './pages/Cart'),
//   loading: () => <div>Идет загрузка корзины</div>,
// });

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}/>
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины</div>}>
              <Cart />
            </Suspense>
          }/>
        <Route path="pizza/:id" element={<FullPizza />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
};

export default App;
