import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize, runTimer, setTime, pauseTimer } from '../actions/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Controls extends Component {
  start(){
    var breakLength = this.props.breakLength;
    var sessionLength = this.props.sessionLength;
    var beep = document.getElementById("beep");
    if(this.props.status == 'running'){
      clearInterval(this.interval);
      this.props.pauseTimer();
    }else{
      this.interval = setInterval(()=>{
        this.props.runTimer();
        if(this.props.time == '99:99'){
          beep.play();
          if(this.props.type == 'Session'){
            document.getElementById("timerPanel").style.background = "#B56357";
            this.props.setTime('Break');
          } else if(this.props.type == 'Break'){
            document.getElementById("timerPanel").style.background = "#227f8b";
            this.props.setTime('Session');
          }
        };
      }, 1000);
    }
  }

  pause(){
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    clearInterval(this.interval);
    this.props.pauseTimer();
  }

  stop(){
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    clearInterval(this.interval);
    this.props.initialize();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id="btnControls">
        <span id="start_stop" onClick={this.start.bind(this)}><FontAwesomeIcon icon="play-circle" size="3x" color="#414141"/></span>
        <span id="pause" onClick={this.pause.bind(this)}><FontAwesomeIcon icon="pause-circle" size="3x" color="#414141"/></span>
        <span id="reset" onClick={this.stop.bind(this)}><FontAwesomeIcon icon="stop-circle" size="3x" color="#414141"/></span>
        <audio id="beep" preload="auto" src="https://goo.gl/65cBl1"></audio>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    time: state.settings.time,
    breakLength: state.settings.breakLength,
    sessionLength: state.settings.sessionLength,
    type: state.settings.type,
    status: state.settings.status
  };
}

export default connect(mapStateToProps,{initialize, runTimer, setTime, pauseTimer})(Controls);
