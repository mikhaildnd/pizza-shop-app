// import { useWhyDidYouUpdate } from 'ahooks';
import { FC, memo } from 'react';
import { CategoriesType } from '../@types/types';

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: FC<CategoriesType> = memo(({ categoryId, onChangeCategory }) => {
  // useWhyDidYouUpdate('Categories', { categoryId, onChangeCategory });
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
});
