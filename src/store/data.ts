import { create } from "zustand";

interface FetchDataState {
  newdata: any[];
  totalCount: number;
  numOfRows: number;
  setData: (payload: { items: any[]; totalCount: number; numOfRows: number }) => void;
  resetData: () => void;
}

const defaultPageSize = 20;

const useDataStore = create<FetchDataState>((set) => ({
  newdata: [],
  totalCount: 0,
  numOfRows: defaultPageSize,
  setData: ({ items, totalCount, numOfRows }) =>
    set({
      newdata: items,
      totalCount,
      numOfRows,
    }),
  resetData: () =>
    set({
      newdata: [],
      totalCount: 0,
      numOfRows: defaultPageSize,
    }),
}));


export { useDataStore };
