import { useContgob } from "../hooks/useContgob";
import DeleteIcon from "../icons/DeleteIcon";

const Task = ({ title, id, completed }) => {
  const { dispatchTasks } = useContgob();

  const compledTask = () => {
    dispatchTasks({ type: "COMPLETED", payload: { id } });
  };
  return (
    <li className="nm-concave-slate-200 py-2 px-3 flex justify-between items-center rounded-lg">
      <div className="flex gap-3">
        <input
          type="checkbox"
          onChange={compledTask}
          checked={completed}
        />
        <span className={completed && "line-through text-black/60"}>
          {title}
        </span>
      </div>
      <div>
        <button
          onClick={() => dispatchTasks({ type: "DELETE", payload: { id } })}
          className="text-slate-400 hover:text-red-400 "
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};
export default Task;
