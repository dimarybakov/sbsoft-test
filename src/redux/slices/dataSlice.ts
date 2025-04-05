import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExcelDataItem, ExcelSchema } from '../../types/types';

const initialState: ExcelSchema = {
  data: [],
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
  },
});

export const { actions: excelDataActions } = excelSlice;
export const { reducer: excelDataReducer } = excelSlice;
