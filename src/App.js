import "./App.css";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="add">
          <AddTask />
        </div>
        <div className="list">
          <Filter />
          <TaskList />
        </div>
      </Provider>
    </div>
  );
}

export default App;
