import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Shared/Components/Navbar/Navbar";
import Home from "./Shared/Components/Home/Home";
import Comments from "./Shared/Components/Comments/Comments";
import Footer from "./Shared/Components/Footer/Footer";
import ToDoList from "./Shared/Components/ToDoList/ToDoList";
import Users from "./Shared/Components/Users/Users";
import Form from "./Shared/Components/Form/Form";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/todos" element={<ToDoList/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
