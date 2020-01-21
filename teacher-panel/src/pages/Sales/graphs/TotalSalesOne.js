import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  YAxis,
  XAxis,
  Tooltip,
  Bar
} from "recharts";
import axios from "axios";

const TotalSalesOne = ({type}) => {
  const [data, setData] = useState();

  useEffect(() => {
      let url;
      switch(type) {
          case "server": url = "/json/totalSalesOneServerGraph.json"; break;
          case "domain": url = "/json/totalSalesOneDomainGraph.json"; break;
          case "email": url = "/json/totalSalesOneEmailGraph.json"; break;
      }
      axios.get(url)
           .then(({data}) => setData(data));
  }, [type]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 34 }} barCategoryGap={0}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={false} />
        <Bar dataKey="value" fill="#282A3C" stroke="#FBB03B" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalSalesOne;
