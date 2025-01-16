import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Circle from "./Circle";
import audio from "../assets/alarma.mp3";
import { useContgob } from "../hooks/useContgob";
import { getImages } from "../services/getImage";

const Pomodoro = () => {
  const {
    select: { pomodoro, rest },
  } = useContgob();

  const [isWork, setIsWork] = useState(true);
  const [isCancel, setIsCancel] = useState(true);
  const [secondsTimer, setSecondsTimer] = useState(0);
  const [image, setImage] = useState("");

  const alarm = useRef(null);
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
      const nextSecond = (nextMode ? pomodoro : rest) * 60;
      setIsWork(nextMode);
      mode.current = nextMode;
      setSecondsTimer(nextSecond);
      leftSecondsTimer.current = nextSecond;
      alarm.current.play();
      getImages({ query: nextMode ? "work" : "rest" }).then((data) =>
        setImage(data)
      );
    }
    reset();
    getImages({ query: "work" }).then((data) => setImage(data));
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
  }, [rest, pomodoro]);

  const totalSeconds = mode.current ? pomodoro * 60 : rest * 60;
  const percentage = Math.round((secondsTimer / totalSeconds) * 100);

  const minutes = Math.floor(secondsTimer / 60);
  let seconds = secondsTimer % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="flex justify-center items-center flex-col my-5 gap-4 flex-1">
      <audio
        ref={alarm}
        src={audio}
      ></audio>
      <h3
        className={`text-4xl font-semibold transition-all ${
          isWork ? "text-blue-400" : "text-green-300"
        }`}
      >
        {isWork ? "Work" : "break"}
      </h3>
      <Circle
        porcent={percentage}
        text={minutes + ":" + seconds}
        state={isWork}
        image={image}
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
