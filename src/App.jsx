import { Route, Routes } from "react-router-dom";
import "./App.css";
import Billing from "./Pages/Billing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Shared/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </>
  );
}

export default App;
