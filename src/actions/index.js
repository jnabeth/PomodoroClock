export const INITIALIZE = 'initialize';
export const UPDATE_SESSION = 'update_session';
export const UPDATE_BREAK = 'update_break';
export const RUN_TIMER = 'run_timer';
export const SET_TIME = 'set_clock';
export const PAUSE_TIMER = 'pause_timer';

export function initialize() {
  return {
    type: INITIALIZE,
    payload: 'initialize'
  }
}

export function updateSession(val) {
  return {
    type: UPDATE_SESSION,
    payload: val
  }
}

export function updateBreak(val) {
  return {
    type: UPDATE_BREAK,
    payload: val
  }
}

export function setTime(type) {
  return {
    type: SET_TIME,
    payload: type
  }
}

export function runTimer() {
  return {
    type: RUN_TIMER,
    payload: 'runTimer'
  }
}

export function pauseTimer() {
  return {
    type: PAUSE_TIMER,
    payload: 'pauseTimer'
  }
}
