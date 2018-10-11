import React, { Component } from 'react';
import BreakLength from '../containers/break-length.js';
import SessionLength from '../containers/session-length.js';
import Controls from '../containers/controls.js';
import Timer from '../containers/timer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleUp, faArrowCircleDown, faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowCircleUp, faArrowCircleDown, faPlayCircle, faPauseCircle, faStopCircle);

export default class App extends Component {
  render() {
    return (
      <div id="page">
        <h1 id="title">Pomodoro Clock</h1>
        <div id="settings">
          <BreakLength />
          <SessionLength />
        </div>
        <div id="displayTimer">
          <Timer  />
        </div>
        <div id="controlPanel">
          <Controls />
        </div>
      </div>
    );
  }
}
