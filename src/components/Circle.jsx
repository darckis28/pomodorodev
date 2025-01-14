import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Circle = ({ text, porcent }) => {
  return (
    <div className="nm-concave-white-sm rounded-full p-2">
      <CircularProgressbar
        value={porcent}
        text={text}
        styles={buildStyles({
          pathColor: "#60A5FA",
          textColor: "#60A5FA",
        })}
      />
    </div>
  );
};
export default Circle;
