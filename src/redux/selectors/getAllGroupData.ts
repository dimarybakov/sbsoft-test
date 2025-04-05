import { createSelector } from '@reduxjs/toolkit';
import { getExcelData } from './getExcelData';

export interface GroupExcelData {
  year: number;
  'Граждане РФ': number;
  'Граждане стран дальнего зарубежья': number;
  'Граждане стран ближнего зарубежья': number;
}

export const getMemoAllGroupData = createSelector(getExcelData, (data) => {
  const result: { [key: number]: GroupExcelData } = {};

  data.forEach((item) => {
    const { year, category, count_turist } = item;
    if (!result[year]) {
      result[year] = {
        year: year,
        'Граждане РФ': 0,
        'Граждане стран дальнего зарубежья': 0,
        'Граждане стран ближнего зарубежья': 0,
      };
    }

    result[year][category as keyof GroupExcelData] += count_turist;
  });

  console.log(Object.values(result));

  return Object.values(result);
});
