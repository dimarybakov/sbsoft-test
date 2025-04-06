import { createSelector } from '@reduxjs/toolkit';
import { getExcelData } from './getExcelData';

export interface GroupExcelData {
  year: number;
  'Граждане РФ': number;
  'Граждане стран дальнего зарубежья': number;
  'Граждане стран ближнего зарубежья': number;
}

export const getTotal = createSelector(getExcelData, (data) => {
  const total = data.reduce(
    (acc: number, { count_turist }) => acc + count_turist,
    0,
  );

  return total;
});
