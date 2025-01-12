import Button from "./components/Button";
import Circle from "./components/Circle";
import Count from "./components/Count";
import Header from "./components/Header";

const App = () => {
  return (
    <div className=" container mx-auto rounded-lg nm-inset-slate-200 overflow-hidden w-full ">
      <Header />
      <div className="flex justify-center items-center flex-col my-5 gap-8">
        {/* <Count /> */}
        <Circle />
        <Button />
      </div>
    </div>
  );
};
export default App;
