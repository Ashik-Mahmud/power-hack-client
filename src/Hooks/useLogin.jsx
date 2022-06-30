import axios from "axios";
import { useEffect, useState } from "react";

const useLogin = async () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    async function checkLogin() {
      await axios
        .get(`http://localhost:5000/users/register`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          const { success } = res.data;
          if (success) {
            setIsLoggedIn(true);
          }
        });
    }
    checkLogin();
  }, []);
  return [isLoggedIn];
};

export default useLogin;
