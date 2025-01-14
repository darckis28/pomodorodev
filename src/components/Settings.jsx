import { useRef } from "react";
import { useContgob } from "../hooks/useContgob";

const Settings = ({ title, pomodoro, breack, value, setShow }) => {
  const { select, setSelect } = useContgob();
  const check = useRef(null);
  const onchange = () => {
    setSelect({
      name: value,
      breack,
      pomodoro,
      selected: true,
    });
    setShow(false);
  };

  return (
    <div className="w-full flex gap-2 items-start mb-2">
      <input
        ref={check}
        onChange={onchange}
        type="radio"
        name="preference"
        id={value}
        value={value}
        checked={select.name === value}
      />
      <div className="-translate-y-1">
        <label
          className="font-semibold"
          htmlFor={value}
        >
          {title}
        </label>
        <div className="font-semibold text-black/60">
          <span className="">{pomodoro} min</span> | <span>{breack} min</span>
        </div>
      </div>
    </div>
  );
};
export default Settings;
