import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Circle = ({ text, porcent, state, image }) => {
  return (
    <div className="nm-concave-white-sm rounded-full p-2 relative">
      <img
        className="absolute w-24 bottom-8 left-[110px] rounded-lg nm-concave-slate-400"
        src={image}
        alt="image"
      />
      <CircularProgressbar
        value={porcent}
        text={text}
        styles={buildStyles({
          pathColor: `${state ? "#60A5FA" : "#25f08a"}`,
          textColor: `${state ? "#60A5FA" : "#25f08a"}`,
        })}
        strokeWidth={3}
      />
    </div>
  );
};
export default Circle;
