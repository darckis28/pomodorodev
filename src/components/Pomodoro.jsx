import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Circle from "./Circle";
import { useContgob } from "../hooks/useContgob";

const Pomodoro = () => {
  const {
    select: { pomodoro, breack },
  } = useContgob();

  const [isWork, setIsWork] = useState(true);
  const [isCancel, setIsCancel] = useState(true);
  const [secondsTimer, setSecondsTimer] = useState(0);

  const mode = useRef(true);
  const cancel = useRef(true);
  const leftSecondsTimer = useRef(secondsTimer);

  function tick() {
    leftSecondsTimer.current--;
    setSecondsTimer(leftSecondsTimer.current);
  }
  function reset() {
    leftSecondsTimer.current = pomodoro * 60;
    setSecondsTimer(leftSecondsTimer.current);
    mode.current = true;
    setIsWork(mode.current);
    (cancel.current = true), setIsCancel(cancel.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = mode.current ? false : true;
      const nextSecond = (nextMode ? pomodoro : breack) * 60;
      setIsWork(nextMode);
      mode.current = nextMode;
      setSecondsTimer(nextSecond);
      leftSecondsTimer.current = nextSecond;
    }
    reset();
    const interval = setInterval(() => {
      if (cancel.current) {
        return;
      }
      if (leftSecondsTimer.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [breack, pomodoro]);

  const totalSeconds = mode.current ? pomodoro * 60 : breack * 60;
  const percentage = Math.round((secondsTimer / totalSeconds) * 100);

  const minutes = Math.floor(secondsTimer / 60);
  let seconds = secondsTimer % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div className="flex justify-center items-center flex-col my-5 gap-4 flex-1">
      <h3
        className={`text-4xl font-semibold transition-all ${
          isWork ? "text-blue-400" : "text-green-300"
        }`}
      >
        {isWork ? "Work" : "breack"}
      </h3>
      <Circle
        porcent={percentage}
        text={minutes + ":" + seconds}
        state={isWork}
      />
      {isCancel ? (
        <Button
          onclick={() => {
            setIsCancel(false);
            cancel.current = false;
          }}
          color={"nm-concave-blue-400-xs"}
        >
          Comenzar
        </Button>
      ) : (
        <Button
          onclick={reset}
          color={"nm-concave-red-400-xs"}
        >
          Cancelar
        </Button>
      )}
    </div>
  );
};
export default Pomodoro;
