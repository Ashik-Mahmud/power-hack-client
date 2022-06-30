import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Billing from "./Pages/Billing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
function App() {
  return (
    <>
      <Toaster />
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
