import { useState ,useEffect} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";



export default function OscarWinsLineChart({movieData}) {
    const[oscarByYear,setOscarByYear]=useState([])
    useEffect(()=>{
        const yearWiseOscarWins = movieData?.reduce((acc, movie) => {
            acc[movie.year] = (acc[movie.year] || 0) + movie.oscar_winning;
            return acc;
          }, {});
          
          const yearData = Object.keys(yearWiseOscarWins).map((year) => ({
            year,
            wins: yearWiseOscarWins[year],
          }));
          setOscarByYear(yearData)
    },[])
  return (
    <div>
      <h3>Oscar Wins by Year</h3>
      <LineChart width={600} height={400} data={oscarByYear}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="wins" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
