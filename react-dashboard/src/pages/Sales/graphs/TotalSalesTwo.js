import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  Line
} from "recharts";
import axios from "axios";

const TotalSalesTwo = ({type}) => {
  const [data, setData] = useState();

  useEffect(() => {
      let url;
      switch(type) {
          case "server": url = "/json/totalSalesTwoServerGraph.json"; break;
          case "domain": url = "/json/totalSalesTwoDomainGraph.json"; break;
          case "email": url = "/json/totalSalesTwoEmailGraph.json"; break;
      }
      axios.get(url)
           .then(({data}) => setData(data));
  }, [type]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 34 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={false} />
        <Line dataKey="value" type="monotone" stroke="#3FA2F7" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TotalSalesTwo;
