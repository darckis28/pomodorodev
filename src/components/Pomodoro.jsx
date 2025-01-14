import { useRef, useState } from "react";
import Button from "./Button";
import Circle from "./Circle";

const Pomodoro = () => {
  const [clock, setClock] = useState("09:00");
  const [porcent, setPorcent] = useState(100);
  const timeLeft = 9;
  let time = timeLeft * 60;
  const timerInterval = useRef(null);
  const updateTime = () => {
    const min = `${String(Math.floor(time / 60)).padStart(2, 0)}`;
    const sec = `${String(time % 60).padStart(2, 0)}`;
    setClock(`${min}:${sec}`);
  };
  const starClock = () => {
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
  };
  return (
    <div className="flex justify-center items-center flex-col my-5 gap-8 flex-1">
      <Circle
        text={clock}
        porcent={porcent}
      />
      <Button onclick={starClock} />
    </div>
  );
};
export default Pomodoro;
