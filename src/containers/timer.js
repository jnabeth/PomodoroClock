import React, { Component } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
  render() {
    return (
      <div id="timerPanel">
        <h3 id="timer-label">{this.props.type}</h3>
        <h1 id="time-left">{this.props.time}</h1>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    time: state.settings.time,
    type: state.settings.type
  };
}

export default connect(mapStateToProps, null)(Timer);
