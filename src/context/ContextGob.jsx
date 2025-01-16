import { createContext, useReducer, useState } from "react";

export const context = createContext(null);

const reducer = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  }
  if (action.type === "DELETE") {
    return state.filter((task) => task.id !== action.payload.id);
  }
  if (action.type === "COMPLETED") {
    return state.map((task) =>
      task.id === action.payload.id
        ? { ...task, completed: !task.completed }
        : task
    );
  }
};

const ContextGob = ({ children }) => {
  const [tasks, dispatchTasks] = useReducer(reducer, []);
  const [select, setSelect] = useState({
    name: "novice",
    selected: true,
    breack: 15,
    pomodoro: 10,
  });
  return (
    <context.Provider value={{ select, setSelect, tasks, dispatchTasks }}>
      {children}
    </context.Provider>
  );
};
export default ContextGob;
