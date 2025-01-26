import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Heading from "@/components/ui/Heading";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2"];

export default function RatingPieChart({ MovieData }) {
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    const ratingData = MovieData?.map((movie) => ({
      name: movie.title,
      value: movie.imdb_rating,
    }));
    setRatingData(ratingData);
  }, [MovieData]);

  return (
    <div className="bg-widgetbgclr p-1 w-full rounded-lg sm:p-4">
      <Heading heading="IMDB Ratings Distribution" className="text-center" />
      <ResponsiveContainer width="100%" height={400}>
        <PieChart
          margin={{
            right: window.innerWidth > 640 ? 35 : 0,
          }}
        >
          <Pie
            data={ratingData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius="55%"
            label={({ name, value }) => (
       
                `${name}: ${value}`
            )}
          >
            {ratingData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
