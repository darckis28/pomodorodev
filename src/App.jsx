import Count from "./components/Count";
import Header from "./components/Header";

const App = () => {
  return (
    <div className=" container mx-auto rounded-lg nm-inset-slate-200 overflow-hidden w-full ">
      <Header />
      <Count />
    </div>
  );
};
export default App;
