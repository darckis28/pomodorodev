import { useState } from "react";
import SettingsIcon from "../icons/SettingIcon";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" w-full py-4 px-5 flex justify-between items-center ">
      <h1 className="font-extrabold text-2xl ">Pomodore.Dev</h1>
      <div>
        <button
          onClick={() => setShow(!show)}
          className={`p-2 ${
            show ? "nm-inset-slate-200" : "nm-concave-white"
          }   rounded-lg flex justify-center items-center gap-2 font-semibold transition-all`}
        >
          <SettingsIcon />
          <span>Personalizar</span>
        </button>
      </div>
    </div>
  );
};
export default Header;
