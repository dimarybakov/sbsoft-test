import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getMemoAllGroupData } from '../../redux/selectors/getAllGroupData';

// Пример данных
// const data = [
//   {
//     name: 'Год 2020',
//     гражданеРФ: 4000,
//     гражданеДальнегоЗарубежья: 2400,
//     гражданеБлижнегоЗарубежья: 2400,
//   },
//   {
//     name: 'Год 2021',
//     гражданеРФ: 3000,
//     гражданеДальнегоЗарубежья: 1398,
//     гражданеБлижнегоЗарубежья: 2210,
//   },
//   {
//     name: 'Год 2022',
//     гражданеРФ: 2000,
//     гражданеДальнегоЗарубежья: 9800,
//     гражданеБлижнегоЗарубежья: 2290,
//   },
// ];

export const StackedBarChart = () => {
  const groupData = useSelector(getMemoAllGroupData);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={groupData} stackOffset="sign">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Граждане РФ" stackId="a" fill="#8884d8" />
        <Bar
          dataKey="Граждане стран дальнего зарубежья"
          stackId="a"
          fill="#82ca9d"
        />
        <Bar
          dataKey="Граждане стран ближнего зарубежья"
          stackId="a"
          fill="#ffc658"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
