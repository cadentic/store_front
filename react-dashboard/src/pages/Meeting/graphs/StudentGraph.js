import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  YAxis,
  XAxis,
  Tooltip,
  Bar
} from "recharts";
import axios from 'axios';



class StudentGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const self = this;
    axios.get('/json/studentGraphAttendance.json')
      .then(res => {
        self.setState({
          data: res.data
        });
      });
  }

  async componentDidUpdate(prevProps) {
      if (prevProps.attendance !== this.props.attendance) {
          let url;
          switch(this.props.attendance) {
              case true: url = "/json/studentGraphAttendance.json"; break;
              case false: url = "/json/studentGraphFeedback.json"; break;
          }
          const { data } = await axios.get(url);
          this.setState({data});
      }
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={this.state.data} margin={{ top: 34 }} barCategoryGap={0}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={false} />
          <Bar dataKey="value" fill="#282A3C" stroke="#FBB03B" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default StudentGraph;
