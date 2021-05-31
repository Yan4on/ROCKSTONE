import React from 'react';
import './Time.css';

class Time extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date()
  
    this.state = {
      time: date.toLocaleString().split(',')[1],
      month:new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    this.intervalSec = setInterval(
      () => this.tick(),
      1000
    );

  }
  componentWillUnmount() {
    clearInterval(this.intervalSec);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString().split(',')[1],
      month:new Date().toLocaleDateString()
    });
  }
  render() {
    return (
      <div className="timedate">
        <div className="pulse">
        {this.state.month}
        <br/>
        {this.state.time}
        </div>
      </div>
    );
  }
}

export default Time;