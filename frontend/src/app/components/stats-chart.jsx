"use client";
import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const allData = {
  7: [
    { name: "Day 1", Clicks: 4, Conversions: 3 },
    { name: "Day 2", Clicks: 10, Conversions: 6 },
    { name: "Day 3", Clicks: 5, Conversions: 2 },
    { name: "Day 4", Clicks: 2, Conversions: 1 },
    { name: "Day 5", Clicks: 5, Conversions: 4 },
    { name: "Day 6", Clicks: 7, Conversions: 3 },
    { name: "Day 7", Clicks: 3, Conversions: 2 },
  ],
  30: [
    { name: "Day 1", Clicks: 400, Conversions: 240 },
    { name: "Day 5", Clicks: 300, Conversions: 139 },
    { name: "Day 10", Clicks: 200, Conversions: 980 },
    { name: "Day 15", Clicks: 278, Conversions: 390 },
    { name: "Day 20", Clicks: 189, Conversions: 480 },
    { name: "Day 25", Clicks: 239, Conversions: 380 },
    { name: "Day 30", Clicks: 349, Conversions: 430 },
  ],
  90: [
    { name: "Day 14", Clicks: 400, Conversions: 240 },
    { name: "Day 28", Clicks: 750, Conversions: 500 },
    { name: "Day 45", Clicks: 1000, Conversions: 980 },
    { name: "Day 60", Clicks: 1500, Conversions: 1390 },
    { name: "Day 75", Clicks: 1890, Conversions: 1480 },
    { name: "Day 85", Clicks: 2390, Conversions: 2080 },
    { name: "Day 90", Clicks: 3490, Conversions: 2930 },
  ],
};

const StatsChart = () => {
  const [data, setData] = useState(allData["30"]);

  return (
    <div className="bg-white p-4 rounded-[0.25rem] shadow-xl h-96 w-full flex flex-col items-left">
      <div className="chart-top flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Clicks & Conversions
        </h3>
        <select
          onChange={(event) => setData(allData[event.target.value])}
          className="border-1 p-1 rounded-[0.25rem]"
        >
          <option value="7">Last 7 Days</option>
          <option value="30" selected>
            Last 30 Days
          </option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>

      <div style={{ flexGrow: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="0 0" stroke="#cfcdcdff" />
            <XAxis dataKey="name" stroke="#a0a0a0" />
            <YAxis stroke="#a0a0a0" />
            <Tooltip
              contentStyle={{
                borderRadius: "0.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid #ccc",
                fontSize: "0.875rem",
              }}
              labelStyle={{ fontWeight: "bold" }}
            />
            <Legend wrapperStyle={{ paddingTop: 10 }} />

            <Line
              type="monotone"
              dataKey="Clicks"
              stroke="#2563EB"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="Conversions"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsChart;
