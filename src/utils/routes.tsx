import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ToDoPage from "../pages/ToDoPage/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todo" element={<ToDoPage />} />
    </Routes>
  );
};

export default Router;