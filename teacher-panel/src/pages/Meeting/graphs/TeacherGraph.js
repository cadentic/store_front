import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  Line
} from "recharts";
import axios from 'axios';


class TeacherGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const self = this;
    axios.get('/json/teacherGraphAttendance.json')
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
              case true: url = "/json/teacherGraphAttendance.json"; break;
              case false: url = "/json/teacherGraphFeedback.json"; break;
          }
          const { data } = await axios.get(url);
          this.setState({data});
      }
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={this.state.data} margin={{ top: 34 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={false} />
          <Line dataKey="value" type="monotone" stroke="#3FA2F7" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default TeacherGraph;
