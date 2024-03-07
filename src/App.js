import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TaskList from "../src/component/TasksList/TasksList";
import AddTask from "./component/AddTask/AddTask";

const WelcomePage = () => (
  <div>
    <h1>WELCOME</h1>
    <Link to="/list">
      <button>TaskList</button>
    </Link>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route exact path="/list" element={<TaskList />} />
      <Route exact path="/add-task" element={<AddTask />} />
    </Routes>
  </Router>
);

export default App;
