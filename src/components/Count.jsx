import { useState } from "react";

const Count = () => {
  const [clock, setClock] = useState("00:00");
  let time = 5 * 60;
  let timerInterval;

  const updateTime = () => {
    const min = `${String(Math.floor(time / 60)).padStart(2, 0)}`;
    const sec = `${String(time % 60).padStart(2, 0)}`;
    setClock(`${min}:${sec}`);
  };
  function startTimer() {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        if (time > 0) {
          time--;
          updateTime();
        } else {
          clearInterval(timerInterval);
          timerInterval = null;
        }
      }, 1000);
    }
  }
  // startTimer();

  return (
    <div
      className=" text-6xl text-blue-400 font-bold  rounded-full w-80 h-80 flex items-center justify-center relative 
    "
      style={{
        background: "conic-gradient(  #60A5FA 50%, #f0f0f0 0%)",
      }}
    >
      <div className="h-[300px] w-[300px] nm-concave-white-xs rounded-full absolute "></div>
      <h1 className="z-40">{clock}</h1>
    </div>
  );
};
export default Count;
