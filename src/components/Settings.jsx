const Settings = ({ title, pomodoro, breack }) => {
  return (
    <div className="w-full flex gap-2 items-start mb-2">
      <input
        type="radio"
        id="preference"
      />
      <div className="-translate-y-1">
        <label className="font-semibold">{title}</label>
        <div className="font-semibold text-black/60">
          <span className="">{pomodoro} min</span> | <span>{breack} min</span>
        </div>
      </div>
    </div>
  );
};
export default Settings;
