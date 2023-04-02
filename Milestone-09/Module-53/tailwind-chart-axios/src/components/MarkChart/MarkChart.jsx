import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const MarkChart = () => {
  let students = [
    {
      id: "001",
      name: "Alice",
      math_mark: 85,
      cse: 60,
    },
    {
      id: "002",
      name: "Bob",
      math_mark: 73,
      cse: 68,
    },
    {
      id: "003",
      name: "Charlie",
      math_mark: 92,
      cse: 78,
    },
    {
      id: "004",
      name: "David",
      math_mark: 68,
      cse: 69,
    },
    {
      id: "005",
      name: "Emma",
      math_mark: 78,
      cse: 78,
    },
    {
      id: "006",
      name: "Frank",
      math_mark: 87,
      cse: 98,
    },
    {
      id: "007",
      name: "Grace",
      math_mark: 91,
      cse: 56,
    },
    {
      id: "008",
      name: "Henry",
      math_mark: 80,
      cse: 66,
    },
    {
      id: "009",
      name: "Isabel",
      math_mark: 95,
      cse: 98,
    },
    {
      id: "010",
      name: "Jack",
      math_mark: 81,
      cse: 70,
    },
  ];

  return (
    <div className="px-[10%] my-10">
      <LineChart width={600} height={300} data={students}>
        <Line type="monotone" dataKey="math_mark" stroke="#4B1513" />
        <Line type="monotone" dataKey="cse" stroke="#8B5CF6" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default MarkChart;
