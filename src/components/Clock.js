import React, { useContext, useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const hours = time.getHours();
  const minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();

  useEffect (() => {
    const intervalId = setInterval(
      () => tick(),
      1000
    );

    return () => clearInterval(intervalId);
  }, [])

  const tick = () => {
    setTime(new Date())
  }

  return (
    <p className="Header-date">time <strong>{hours}:{minutes}</strong></p>
  )
}

export default Clock;