// import { useState } from 'react';

const Categories = ({ categoryId, onChangeCategory }) => {
  // const [activeButtonIdx, setActiveButtonIdx] = useState(0);

  const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // const onClickCategory = (idx) => {
  //   setActiveButtonIdx(idx);
  // };

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

// import { useState } from 'react';

// const Categories = () => {
//   const [activeButtonIdx, setActiveButtonIdx] = useState(0);

//   const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

//   const onClickCategory = (idx) => {
//     setActiveButtonIdx(idx);
//   };

//   return (
//     <div className="categories">
//       <ul>
//         {categoryNames.map((categoryName, idx) => (
//           <li
//             key={idx}
//             onClick={() => {
//               onClickCategory(idx);
//             }}
//             className={activeButtonIdx === idx ? 'active' : ''}>
//             {categoryName}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categories;
