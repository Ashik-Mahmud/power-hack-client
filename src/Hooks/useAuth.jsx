import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/users/register`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setAuth(true);
        }
      });
  }, []);
  return [auth];
};

export default useAuth;
