import React, { Component } from 'react';
import { updateBreak } from '../actions/index';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BreakLength extends Component {

  increment(){
    this.props.updateBreak(1);
  }
  decrement(){
    this.props.updateBreak(-1);
  }
  render() {
    return (
      <div>
        <h3 id="break-label"> Break Length </h3>
        <div className="counters">
          <span id="break-increment" onClick={this.increment.bind(this)}>
            <FontAwesomeIcon icon="arrow-circle-up" size="3x" color="#712405"/>
          </span>
          <h4 id="break-length">{this.props.breakLength}</h4>
          <span id="break-decrement" onClick={this.decrement.bind(this)}>
            <FontAwesomeIcon icon="arrow-circle-down" size="3x" color="#712405"/>
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    breakLength: state.settings.breakLength
  };
}

export default connect(mapStateToProps,{updateBreak})(BreakLength);
