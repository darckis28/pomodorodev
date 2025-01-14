import DeleteIcon from "../icons/DeleteIcon";

const Task = () => {
  return (
    <li className="nm-concave-slate-200 py-2 px-3 flex justify-between items-center rounded-lg">
      <div className="flex gap-3">
        <input
          type="checkbox"
          name=""
          id=""
        />
        <span>oyaaa</span>
      </div>
      <div>
        <button className="text-slate-400 hover:text-red-400 ">
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};
export default Task;
