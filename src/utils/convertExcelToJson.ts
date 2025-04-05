import { ExcelDataItem, RawExcelData } from '../types/types';
import { read as readExcelFile, utils } from 'xlsx';

export function convertExcelToJson(
  data: Uint8Array<ArrayBuffer>,
): ExcelDataItem[] {
  const workbook = readExcelFile(data, { type: 'array' });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const jsonData = utils.sheet_to_json(worksheet) as RawExcelData[];

  const convertedJsonData = jsonData.map((item) => ({
    id: item.ID,
    year: item.год,
    region: item.регион,
    country: item.страна,
    category: item['категория туриста'],
    child: item.дети === 'да' ? true : false,
    count_turist: item.count_turist,
    count_turist_befo_year: item.count_turist_befo_year,
  }));

  return convertedJsonData;
}
