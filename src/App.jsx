import Body from "./components/body";
import Input from "./components/input";
import Legend from "./components/legend/Legend";
import "./App.scss";
import Config from "./components/config";

const App = () => {
  return (
    <div className="app">
      <Body />
      <Input />
      <Config />
      <Legend />
    </div>
  );
};

export default App;
