import React from 'react';

export default function Clock() {
  return (
    <div id="container">

      <div id="clock">
    <div className="clockHand hour">
        <div className="hr" id="hr"></div>
      </div>
    <div className="clockHand minute">
        <div className="min" id="min"></div>
      </div>
    <div className="clockHand second">
        <div className="sec" id="sec"></div>
      </div>
      </div>

    </div>
  );
}