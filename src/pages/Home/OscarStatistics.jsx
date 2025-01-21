import React from "react";
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
import MovieData from "../../Data/MovieData";

const OscarStatistics = () => {
  const [oscarData, setOscarData] = useState([]);
  useEffect(() => {
    const filterOscarData = MovieData.slice(0, 5).map((movie) => ({
      year: movie.year,
      nominations: movie.oscar_nominations,
      wins: movie.oscar_winning,
    }));
    setOscarData(filterOscarData);
  }, [MovieData]);

  return (
    <div className="p-4  shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Oscar Statistics Overview</h2>
      <ResponsiveContainer width="100%" height={300} className="bg-widgetbgclr">
        <BarChart
          data={oscarData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="nominations" fill="#8884d8" name="Nominations" />
          <Bar dataKey="wins" fill="#82ca9d" name="Wins" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OscarStatistics;
