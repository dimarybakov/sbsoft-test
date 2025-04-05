import React from 'react';
import './App.scss';
import { convertExcelToJson } from './utils/convertExcelToJson';
import { useAppDispatch } from './redux/hooks';
import { excelDataActions } from './redux/slices/dataSlice';

import StackedBarChart from './components/StackedBarChart/StackedBarChart';

function App() {
  const dispatch = useAppDispatch();

  const onLoadFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!target.files) return;

    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const json = convertExcelToJson(data);
      dispatch(excelDataActions.initData(json));
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <div className="wrapper">
        <h1>Динамика туристского потока</h1>
        <input
          style={{ marginBottom: '20px' }}
          type="file"
          onChange={onLoadFileHandler}
        ></input>

        <StackedBarChart />
      </div>
    </>
  );
}

export default App;
