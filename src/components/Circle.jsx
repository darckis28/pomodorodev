import { useEffect, useState, useRef, useCallback } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Circle = () => {
  const [clock, setClock] = useState("00:00");
  const [porcent, setPorcent] = useState(100);
  const timeLeft = 1;
  let time = timeLeft * 60;
  const timerInterval = useRef(null);
  const updateTime = useCallback(() => {
    const min = `${String(Math.floor(time / 60)).padStart(2, 0)}`;
    const sec = `${String(time % 60).padStart(2, 0)}`;
    setClock(`${min}:${sec}`);
  }, [time]);
  useEffect(() => {
    if (!timerInterval.current) {
      timerInterval.current = setInterval(() => {
        if (time > 0) {
          time--;
          updateTime();
          setPorcent((time / (timeLeft * 60)) * 100);
        } else {
          clearInterval(timerInterval.current);
          timerInterval.current = null;
        }
      }, 1000);
    }
  }, [timerInterval, clock, time, updateTime]);
  return (
    <div className="nm-concave-white-sm rounded-full p-2">
      <CircularProgressbar
        value={porcent}
        text={clock}
        styles={buildStyles({
          pathColor: "#60A5FA",
          textColor: "#60A5FA",
        })}
      />
    </div>
  );
};
export default Circle;
