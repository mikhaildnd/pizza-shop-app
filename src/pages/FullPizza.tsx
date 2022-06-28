import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FullPizzaType } from '../@types/types';

type PizzaType = FullPizzaType;

const address = `https://628bd2d1667aea3a3e36d84e.mockapi.io/products/`;

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<PizzaType>();
  // const { title, imageUrl } = pizza;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(address + id);

        setPizza(data);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }

        navigate('/');
      }
    };

    fetchPizza();
  }, []);

  return (
    <div className="container">
      {pizza ? (
        <>
          <img src={pizza.imageUrl} alt={pizza.title} />
          <h2>{pizza.title}</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>{pizza.price}</p>
        </>
      ) : (
        <span style={{ fontSize: '50px' }}>Загрузка ...</span>
      )}
    </div>
  );
};

export default FullPizza;
