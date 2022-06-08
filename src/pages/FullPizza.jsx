import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const address = `https://628bd2d1667aea3a3e36d84e.mockapi.io/products/`;

const FullPizza = () => {
  const [pizza, setPizza] = useState('');
  const { title, imageUrl } = pizza;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(address + id);

        setPizza(data);
      } catch (error) {
        alert(error.message);
        navigate('/');
      }
    };

    fetchPizza();
  }, []);

  return (
    <div className="container">
      {pizza ? (
        <>
          <img src={imageUrl} alt={title} />
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </>
      ) : (
        <span style={{ fontSize: '50px' }}>Загрузка ...</span>
      )}
    </div>
  );
};

export default FullPizza;
