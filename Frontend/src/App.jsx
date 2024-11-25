import "./App.css";
import Home from "./components/homePage/Home";
import Navbar from "./components/navbar/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Service from "./components/servicePage/Service";
import Contact from "./components/contactPage/Contact";
import Footer from "./components/footer/Footer";
import Login from "./components/Admin/login/Login";
import Query from "./components/Admin/query/allQuery/Query";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/query" element={<Query />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
