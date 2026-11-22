
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/login";
import Home from "../pages/home"
import Navbar from "./components/Navbar";
import About from "../pages/About";
import Todo from "../pages/Todo";

function App() {
  return (
    <BrowserRouter>
     <div className="h-full flex flex-col overflow-hidden">

      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;

