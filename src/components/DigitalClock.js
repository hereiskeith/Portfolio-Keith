import React, { useEffect, useState } from "react";

const DigitalClock = (props) => {
  const [time, setTime] = useState(new Date());
  // const timeToString = time.toLocaleTimeString().replace(/:/g, ' : ');
  const timeOnlySecond =
    (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
  const timeOnlyHour = (time.getHours() < 10 ? "0" : "") + time.getHours();
  const timeOnlyMinute =
    (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  // const timeDisplayWithoutSecond = timeToString.substring(0, 10);

  useEffect(() => {
    let UpdateTimeEach1s = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(UpdateTimeEach1s);
    };
  }, [time]);

  return (
    <div className="digitalClock">
      <h3 className="time">
        {timeOnlyHour + " : " + timeOnlyMinute + " : "}
        <span className="seconds">{timeOnlySecond}</span>
      </h3>
      <q className="slogan">Time flies, every second counts</q>
    </div>
  );
};

export default DigitalClock;
