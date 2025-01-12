import SettingsIcon from "../icons/SettingIcon";

const Header = () => {
  return (
    <div className=" w-full py-4 px-5 flex justify-between items-center ">
      <h1 className="font-extrabold text-2xl ">Pomodore.Dev</h1>
      <div>
        <button className="p-2 nm-concave-white  rounded-lg flex justify-center items-center gap-2 font-semibold">
          <SettingsIcon />
          <span>Personalizar</span>
        </button>
      </div>
    </div>
  );
};
export default Header;
