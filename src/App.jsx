import { Route, Routes } from "react-router-dom";
import "./App.css";
import Billing from "./Pages/Billing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Billing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
