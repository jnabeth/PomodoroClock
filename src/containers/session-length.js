import React, { Component } from 'react';
import { updateSession, setTime } from '../actions/index';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SessionLength extends Component {

  increment(){
    this.props.updateSession(1);
    this.props.setTime('Session');
  }
  decrement(){
    this.props.updateSession(-1);
    this.props.setTime('Session');
  }
  render() {
    return (
      <div>
        <h3 id="session-label"> Session Length </h3>
        <div className="counters">
          <span id="session-increment" onClick={this.increment.bind(this)}>
            <FontAwesomeIcon icon="arrow-circle-up" size="3x" color="#712405"/>
          </span>
          <h4 id="session-length">{this.props.sessionLength}</h4>
          <span id="session-decrement" onClick={this.decrement.bind(this)}>
            <FontAwesomeIcon icon="arrow-circle-down" size="3x" color="#712405"/>
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    sessionLength: state.settings.sessionLength
  };
}

export default connect(mapStateToProps,{updateSession, setTime})(SessionLength);
