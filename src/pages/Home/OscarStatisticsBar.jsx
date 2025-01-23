import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Heading from "@/components/ui/Heading";

const OscarStatistics = ({ MovieData }) => {
  const [oscarData, setOscarData] = useState([]);
  useEffect(() => {
    const filterOscarData = MovieData?.slice(0, 5).map((movie) => ({
      year: movie.year,
      nominations: movie.oscar_nominations,
      wins: movie.oscar_winning,
    }));
    setOscarData(filterOscarData);
  }, [MovieData]);
  return (
    <div className=" shadow rounded-lg bg-widgetbgclr p-1">
      <Heading heading="Oscar Statistics Overview" className="pl-3" />

      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={oscarData}
          margin={{
            top: 20,
            right: 40,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="nominations" fill="#8884d8" name="Nominations" />
          <Bar dataKey="wins" fill="#14f9a6" name="Wins" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OscarStatistics;
