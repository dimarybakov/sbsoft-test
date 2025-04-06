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
import { GroupExcelData } from '../../redux/selectors/getAllGroupData';

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

interface StackedBarChartProps {
  data: GroupExcelData[];
  filter: string;
}

export const StackedBarChart = (props: StackedBarChartProps) => {
  const { data, filter } = props;

  const getBarColor = (filter: string) => {
    let color: string;

    switch (filter) {
      case 'Граждане РФ':
        color = '#8884d8';
        break;
      case 'Граждане стран дальнего зарубежья':
        color = '#82ca9d';
        break;
      case 'Граждане стран ближнего зарубежья':
        color = '#ffc658';
        break;
      case 'Дети':
        color = '#FFA500';
        break;

      default:
        color = '#8884d8';
        break;
    }

    return color;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      {filter === 'Все туристы' ? (
        <BarChart data={data} stackOffset="sign">
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
      ) : (
        <BarChart data={data} stackOffset="sign">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={filter} fill={getBarColor(filter)} />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
