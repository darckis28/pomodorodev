import { useRef, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import Task from "./Task";

export const TaskSection = () => {
  const [add, setAdd] = useState(false);
  const input = useRef(null);

  function cancel() {
    input.current.value = "";
    setAdd(false);
  }
  return (
    <div className=" md:min-w-80 nm-inset-slate-200 rounded-lg p-5">
      <h2 className="text-2xl font-bold mb-2">Tasks</h2>
      <ul className="mb-2">
        <Task />
      </ul>

      {add ? (
        <div className="nm-inset-white p-2  border  border-slate-500  items-center gap-2 rounded-lg  text-slate-500 text-lg">
          <input
            ref={input}
            type="text"
            placeholder="Task..."
            className="bg-transparent w-full outline-none mb-2"
          />
          <div>
            <button className="py-1 px-4 bg-blue-400 hover:bg-blue-500 text-white mr-3 rounded-lg">
              Save
            </button>
            <button
              onClick={cancel}
              className="py-1 px-4 hover:text-red-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setAdd(true)}
          className="nm-inset-slate-200 cursor-pointer p-6 border border-dashed border-slate-500 flex items-center gap-2 rounded-lg hover:nm-concave-slate-200 text-slate-500 text-lg"
        >
          <PlusIcon />
          <span>Add new task</span>
        </div>
      )}
    </div>
  );
};
