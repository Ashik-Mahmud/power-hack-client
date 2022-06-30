import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Auth/RequireAuth";
import useAuth from "./Hooks/useAuth";
import Billing from "./Pages/Billing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
export const AuthContext = createContext(null);
function App() {
  const { auth } = useAuth();
  return (
    <>
      <Toaster />
      <AuthContext.Provider value={{ auth }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Billing />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
