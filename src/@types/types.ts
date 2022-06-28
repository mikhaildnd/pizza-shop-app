/* Pizza */
export type FullPizzaType = {
  title: string;
  imageUrl: string;
  price: number;
};

/* Pizza-block */
export type PizzaBlockType = {
  id: string;
  title: string;
  price: number;
  sizes: number[];
  count: number;
  imageUrl: string;
  types: number[];
};

/* Searchpizzaparams */
export type SearchPizzaParams = {
  sort: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

/* Sort */
export type SortType = {
  name: string;
  sortProperty: SortProperty;
};

// export type SortProperty = 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price';
export enum SortProperty {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

/* Categories */
export type CategoriesType = {
  categoryId: number;
  onChangeCategory: (idx: number) => void;
};

/* Cart */
export type CartItemType = {
  id: string;
  title: string;
  price: number;
  size: number;
  count: number; //
  imageUrl: string;
  type: string;
};

/* Pagination */
export type PaginationType = { currentPage: number; onChangePage: (page: number) => void };
