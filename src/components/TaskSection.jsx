import { useRef, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import Task from "./Task";
import { useContgob } from "../hooks/useContgob";

export const TaskSection = () => {
  const [add, setAdd] = useState(false);
  const input = useRef(null);
  const { tasks, dispatchTasks } = useContgob();

  function resetInput() {
    input.current.value = "";
    setAdd(false);
  }
  function save() {
    if (input.current.value === "") return;
    dispatchTasks({
      type: "ADD",
      payload: {
        description: input.current.value,
        id: crypto.randomUUID(),
        completed: false,
      },
    });
    resetInput();
  }
  return (
    <div className=" md:min-w-80 nm-inset-slate-200 rounded-lg p-5">
      <h2 className="text-2xl font-bold mb-2">Tasks</h2>
      <ul className="mb-2 flex flex-col gap-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.description}
            completed={task.completed}
          />
        ))}
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
            <button
              onClick={save}
              className="py-1 px-4 nm-concave-blue-400 hover:bg-blue-500 text-white mr-3 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={resetInput}
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
