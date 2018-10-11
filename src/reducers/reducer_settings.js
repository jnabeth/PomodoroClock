import { INITIALIZE } from '../actions/index';
import { UPDATE_SESSION } from '../actions/index';
import { UPDATE_BREAK } from '../actions/index';
import { SET_TIME } from '../actions/index';
import { RUN_TIMER } from '../actions/index';
import { PAUSE_TIMER } from '../actions/index';

var INITIAL_STATE = {
  breakLength: 5,
  sessionLength: 25,
  time: '25:00',
  type: 'Session',
  status: 'stopped'
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case INITIALIZE:
      return {
        breakLength: 5,
        sessionLength: 25,
        time: '25:00',
        type: 'Session',
        status: 'stopped'
      }
    case UPDATE_BREAK:
      var val = action.payload;
      var breakLength = state.breakLength;
      var updatedLength = val + breakLength;
      (updatedLength<1) ? updatedLength=1 : updatedLength;
      (updatedLength>60) ? updatedLength=60 : updatedLength;
      return {
        breakLength: updatedLength,
        sessionLength: state.sessionLength,
        time: state.time,
        type: state.type,
        status: state.status
      }
    case UPDATE_SESSION:
      var val = action.payload;
      var sessionLength = state.sessionLength;
      var updatedLength = val + sessionLength;
      (updatedLength<1) ? updatedLength=1 : updatedLength;
      (updatedLength>60) ? updatedLength=60 : updatedLength;
      return {
        breakLength: state.breakLength,
        sessionLength: updatedLength,
        time: state.time,
        type: state.type,
        status: state.status
      }
    case SET_TIME:
      var sessionLength = state.sessionLength;
      var breakLength = state.breakLength;
      var type = action.payload;
      var time = '';
      (type == 'Session') ? time=sessionLength : time=breakLength;
      if (time.toString().length==1){
        var updatedTime=`0${time}:00`;
      } else {
        var updatedTime=`${time}:00`;
      }
      return {
        breakLength: state.breakLength,
        sessionLength: state.sessionLength,
        time: updatedTime,
        type: type,
        status: state.status
      }
    case RUN_TIMER:
      var minutes = parseInt(state.time.substring(0,2));
      var seconds = parseInt(state.time.substring(3,5),10);
      if(seconds == 0){
        seconds = 60;
        updatedMinutes = minutes - 1;
      } else{
        updatedMinutes = minutes;
      }
      updatedSeconds = seconds - 1;
      if(updatedMinutes < 0){
        updatedMinutes=99;
        updatedSeconds=99;
      }
      if (updatedMinutes.toString().length==1){
        var updatedMinutes=`0${updatedMinutes}`;
      } else {
        var updatedMinutes=`${updatedMinutes}`;
      }
      if (updatedSeconds.toString().length==1){
        var updatedSeconds=`0${updatedSeconds}`;
      } else {
        var updatedSeconds=`${updatedSeconds}`;
      }
      var updatedTime = `${updatedMinutes}:${updatedSeconds}`;
      return {
        breakLength: state.breakLength,
        sessionLength: state.sessionLength,
        time: updatedTime,
        type: state.type,
        status: 'running'
      }
    case PAUSE_TIMER:
    return {
      breakLength: state.breakLength,
      sessionLength: state.sessionLength,
      time: state.time,
      type: state.type,
      status: 'stopped'
    }
    default:
      return state;
  }
}
