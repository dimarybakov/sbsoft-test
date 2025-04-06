export interface INews {
  id: string;
  text: string;
}

export interface RawExcelData {
  ID: number;
  год: number;
  регион: string;
  страна: string;
  'категория туриста': string;
  дети: string;
  count_turist: number;
  count_turist_befo_year: number;
}

export interface ExcelDataItem {
  id: number;
  year: number;
  region: string;
  country: string;
  category: string;
  child: boolean;
  count_turist: number;
  count_turist_befo_year: number;
}

export interface ExcelSchema {
  data: ExcelDataItem[];
  filter: string;
  onlyChild: boolean;
}

export interface StateSchema {
  excelData: ExcelSchema;
}
