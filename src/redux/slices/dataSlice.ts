import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExcelDataItem, ExcelSchema } from '../../types/types';

const initialState: ExcelSchema = {
  data: [],
  filter: 'Все туристы',
  onlyChild: false,
};

export const excelSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = [];
    },
    initData: (state, action: PayloadAction<ExcelDataItem[]>) => {
      state.data = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    toggleChild: (state) => {
      state.onlyChild = !state.onlyChild;
      if (state.onlyChild) {
        state.filter = 'Дети';
      } else {
        state.filter = 'Все туристы';
      }
    },
  },
});

export const { actions: excelDataActions } = excelSlice;
export const { reducer: excelDataReducer } = excelSlice;
