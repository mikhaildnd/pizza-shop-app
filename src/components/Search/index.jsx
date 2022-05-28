import { useContext, useRef, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const [inputLocalValue, setInputLocalValue] = useState(''); //locally
  const { setSearchValue } = useContext(SearchContext); //for request
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setInputLocalValue('');
    inputRef.current.focus();
  };

  const updateRequestSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (e) => {
    setInputLocalValue(e.target.value);
    updateRequestSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 24 24">
        <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
      </svg>
      <input
        ref={inputRef}
        value={inputLocalValue}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы"
        type="text"
      />
      {inputLocalValue && (
        <svg onClick={() => onClickClear()} className={styles.clear} viewBox="0 0 200 200">
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
