import Header from "./components/Header";
import Pomodoro from "./components/Pomodoro";
import { TaskSection } from "./components/TaskSection";
import ContextGob from "./context/ContextGob";

const App = () => {
  return (
    <ContextGob>
      <div className=" container mx-auto rounded-lg nm-inset-slate-200 overflow-hidden w-full ">
        <Header />
        <div className=" flex flex-col md:flex-row gap-4 w-full ">
          <Pomodoro />
          <TaskSection />
        </div>
      </div>
    </ContextGob>
  );
};
export default App;
