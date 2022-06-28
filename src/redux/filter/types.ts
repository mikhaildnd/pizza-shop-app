import { SortType } from '../../@types/types';

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: SortType;
  currentPage: number;
}
