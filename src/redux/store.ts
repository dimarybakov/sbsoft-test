import { configureStore } from '@reduxjs/toolkit';

import { excelDataReducer } from './slices/dataSlice';
import { StateSchema } from '../types/types';

export const store = configureStore<StateSchema>({
  reducer: {
    excelData: excelDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
