import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/Dashboard";
import HomePage from "./component/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz-task.git" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
