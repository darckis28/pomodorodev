import { useState } from "react";
import SettingsIcon from "../icons/SettingIcon";
import Settings from "./Settings";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" w-full py-4 px-5 flex justify-between items-center ">
      <h1 className="font-extrabold text-2xl ">Pomodore.Dev</h1>
      <div className="relative">
        <button
          onClick={() => setShow(!show)}
          className={`p-2 ${
            show ? "nm-inset-slate-200" : "nm-concave-white"
          }   rounded-lg flex justify-center items-center gap-2 font-semibold transition-all relative`}
        >
          <SettingsIcon />
          <span>Personalizar</span>
        </button>
        {show && (
          <div
            className={
              "nm-concave-slate-200 absolute top-12 min-w-60 right-1/2 p-4 "
            }
          >
            <h3 className="text-lg font-semibold mb-2">
              Personalizar nivel de concentración
            </h3>
            <Settings
              title={"Novice"}
              pomodoro={10}
              breack={5}
            />
            <Settings
              title={"Intermediate"}
              pomodoro={25}
              breack={10}
            />

            <Settings
              title={"Advanced"}
              pomodoro={35}
              breack={15}
            />
            <Settings
              title={"Expert"}
              pomodoro={60}
              breack={15}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
