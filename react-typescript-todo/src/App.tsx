import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import TodoList from "./TaskManage/components/TodoList/TodoList";
import LabApp from "./Lab-exercise01/LabApp";
import "./App.css";
import PageWithNavbar from "./NavBar/PageWithNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageWithNavbar />}>
            <Route path="lab" element={<LabApp />} />

            <Route path="todo" element={<TodoList />} />
            <Route index element={<Navigate to="todo" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
