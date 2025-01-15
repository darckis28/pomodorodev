import { createContext, useState } from "react";

export const context = createContext(null);

const ContextGob = ({ children }) => {
  const [select, setSelect] = useState({
    name: "novice",
    selected: true,
    breack: 15,
    pomodoro: 10,
  });
  return (
    <context.Provider value={{ select, setSelect }}>
      {children}
    </context.Provider>
  );
};
export default ContextGob;
