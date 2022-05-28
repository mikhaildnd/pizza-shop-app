const Categories = ({ categoryId, onChangeCategory }) => {
  const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((categoryName, idx) => (
          <li
            key={idx}
            onClick={() => {
              onChangeCategory(idx);
            }}
            className={categoryId === idx ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
