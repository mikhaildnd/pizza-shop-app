import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="pizza/:id" element={<FullPizza />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
