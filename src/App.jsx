import Body from "./components/body";
import Input from "./components/input";
import Legend from "./components/legend/Legend";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Body />
      <Input />
      <Legend />
    </div>
  );
};

export default App;
