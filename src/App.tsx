import React from 'react';
import './App.scss';
import { convertExcelToJson } from './utils/convertExcelToJson';
import { useAppDispatch } from './redux/hooks';
import { excelDataActions } from './redux/slices/dataSlice';

import StackedBarChart from './components/StackedBarChart/StackedBarChart';
import { useSelector } from 'react-redux';
import { getMemoAllGroupData } from './redux/selectors/getAllGroupData';
import { getTotal } from './redux/selectors/getTotal';
import { SelectFilter } from './components/SelectFilter/SelectFilter';
import { getCategoryFilter } from './redux/selectors/getCategoryFilter';
import { getOnlyChild } from './redux/selectors/getOnlyChild';

const filterOptions = [
  { value: 'Все туристы', content: 'Все туристы' },
  { value: 'Граждане РФ', content: 'Граждане РФ' },
  {
    value: 'Граждане стран дальнего зарубежья',
    content: 'Граждане стран дальнего зарубежья',
  },
  {
    value: 'Граждане стран ближнего зарубежья',
    content: 'Граждане стран ближнего зарубежья',
  },
];

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

  const changeFilterHandler = (value: string) => {
    dispatch(excelDataActions.setFilter(value));
  };

  const onChildClickHandler = () => {
    dispatch(excelDataActions.toggleChild());
  };

  const groupData = useSelector(getMemoAllGroupData);
  const totalTourists = useSelector(getTotal);
  const categoryFilter = useSelector(getCategoryFilter);
  const onlyChild = useSelector(getOnlyChild);

  return (
    <>
      <div className="wrapper">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h2>Динамика туристского потока</h2>
          <p
            style={{ color: 'blue', fontWeight: '700' }}
          >{`Итого: ${totalTourists}`}</p>
        </div>
        <input
          style={{ marginBottom: '20px' }}
          type="file"
          onChange={onLoadFileHandler}
        ></input>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-start',
            marginBottom: '50px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {!onlyChild && (
              <SelectFilter
                options={filterOptions}
                onChange={changeFilterHandler}
              />
            )}
            <button
              style={{
                backgroundColor: onlyChild ? 'blue' : 'white',
                color: onlyChild ? 'white' : 'black',
              }}
              onClick={onChildClickHandler}
            >
              Дети
            </button>
          </div>
        </div>

        <StackedBarChart data={groupData} filter={categoryFilter} />
      </div>
    </>
  );
}

export default App;
